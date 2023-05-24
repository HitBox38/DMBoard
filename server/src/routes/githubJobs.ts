import { Router } from "express";
import { createInterfaces, downloadJsonFiles } from "../controllers/githubController";

const router = Router();

router.get("/download-json", downloadJsonFiles);
router.get("/create-interfaces", createInterfaces);

export default router;
