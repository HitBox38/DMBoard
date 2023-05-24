import axios, { AxiosRequestHeaders } from "axios";
import * as fs from "fs";
import * as path from "path";
import { Request, Response } from "express";

type InterfaceData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [interfaceName: string]: any[];
};

const processFolder = async (
  folderUrl: string,
  outputFolderPath: string,
  headers: AxiosRequestHeaders
) => {
  const response = await axios.get(folderUrl, { headers });
  const entries = response.data;

  for (const entry of entries) {
    console.time(entry.name);
    if (entry.type === "file" && entry.name.endsWith(".json")) {
      const fileResponse = await axios.get(entry.download_url, { headers });
      const jsonObject = fileResponse.data;
      const outputFilePath = path.join(outputFolderPath, entry.name);
      fs.writeFileSync(outputFilePath, JSON.stringify(jsonObject, null, 2));
    } else if (entry.type === "dir") {
      const newOutputFolderPath = path.join(outputFolderPath, entry.name);
      if (!fs.existsSync(newOutputFolderPath)) {
        fs.mkdirSync(newOutputFolderPath);
      }
      await processFolder(entry.url, newOutputFolderPath, headers);
    }
    console.timeEnd(entry.name);
  }
};

export const downloadJsonFiles = async (req: Request, res: Response) => {
  const outputFolder = "../../output";

  const url = `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/${process.env.GITHUB_FOLDER}`;

  const headers = {
    Accept: "application/vnd.github.v3+json",
  };

  try {
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder);
    }

    await processFolder(url, outputFolder, headers);

    res.status(200).send("JSON files have been saved to the output folder.");
  } catch (error) {
    res.status(500).send("An error occurred: " + error);
  }
};

const createInterface = (interfaceData: InterfaceData, interfaceName: string) => {
  let interfaceString = `export interface ${interfaceName.replaceAll("-", "_")} {\n`;

  const keys = Object.keys(interfaceData);
  const firstKey = keys[0] === "_meta" ? keys[1] : keys[0];
  const properties = interfaceData[firstKey];

  const addedProperties: { [key: string]: boolean } = {};
  const propertyFrequency: { [key: string]: number } = {};

  // console.log(interfaceName);

  properties.forEach((property) => {
    for (const key in property) {
      propertyFrequency[key] = (propertyFrequency[key] || 0) + 1;
    }
  });

  properties.forEach((property) => {
    for (const key in property) {
      if (!addedProperties[key]) {
        const value = property[key];
        const type = typeof value;
        const isOptional = propertyFrequency[key] < properties.length ? "?" : "";

        if (Array.isArray(value)) {
          const arrayType = typeof value[0];
          interfaceString += `  ${key}${isOptional}: ${arrayType}[];\n`;
        } else {
          interfaceString += `  ${key}${isOptional}: ${type};\n`;
        }

        addedProperties[key] = true;
      }
    }
  });

  interfaceString += "}\n";
  return interfaceString;
};

const getJsonFilesFromDir = (dir: string): string[] => {
  const fileTypes = [".json"];
  const filesToReturn: string[] = [];

  const walkDir = (currentPath: string) => {
    const files = fs.readdirSync(currentPath);
    for (const file of files) {
      const curFile = path.join(currentPath, file);
      if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.extname(curFile)) !== -1) {
        filesToReturn.push(curFile);
      } else if (fs.statSync(curFile).isDirectory()) {
        walkDir(curFile);
      }
    }
  };

  walkDir(dir);
  return filesToReturn;
};

export const createInterfaces = async (req: Request, res: Response): Promise<void> => {
  const outputFolder = "../../output";
  const interfacesFolder = "../../../../interfaces";

  try {
    const jsonFiles = getJsonFilesFromDir(outputFolder);

    console.time(jsonFiles + " interfaces");
    console.log("=======================");

    for (const filePath of jsonFiles) {
      const interfaceName = path.parse(filePath).name;
      console.time(interfaceName);
      const fileData = fs.readFileSync(filePath, "utf-8");
      const jsonObject: InterfaceData = JSON.parse(fileData);
      const interfaceString = createInterface(jsonObject, interfaceName);
      const interfaceFilePath = path.join(__dirname, interfacesFolder, `${interfaceName}.ts`);
      fs.writeFileSync(interfaceFilePath, interfaceString);
      console.timeEnd(interfaceName);
    }

    console.log("=======================");
    console.timeEnd(jsonFiles + " interfaces");

    res.status(200).send("Interfaces have been created in the interfaces folder.");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred: " + error);
  }
};
