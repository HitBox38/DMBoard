import { Flex, Button, Center } from "@chakra-ui/react";
import { useStore } from "./stores/store";

function App() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);

  return (
    <Flex w={"100vw"} h="100vh" alignItems={"center"} justifyContent={"center"}>
      {/* <Center h={"100px"}> */}
      <p>Count: {count}</p>
      <Button colorScheme="blue" onClick={increment}>
        Increment
      </Button>
      {/* </Center> */}
    </Flex>
  );
}

export default App;
