import logo from "./logo.svg";
import "./App.css";
import SearchInput from "./components/SearchInput";
import "./assets/stylesheet.css";

import { ChakraProvider, Box, Flex, Text } from "@chakra-ui/react";
import UserContainer from "./components/UserContainer";
import RepositoryContainer from "./components/RepositoryContainer";
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [reposUrl, setReposUrl] = useState("");

  const handleCallback = (childData) => {
    setUsername(childData);
  };

  const handleReposUrlCallback = (childData) => {
    console.log("#####");
    console.log(childData);
    setReposUrl(childData);
  };

  return (
    <Box p={20}>
      <Box p={20} bg="#F5F5F5" borderRadius="5">
        <ChakraProvider>
          <SearchInput parentCallback={handleCallback} />
          <Flex
            justify="space-around"
            direction={["column", "column", "row", "row"]}
          >
            <Flex direction="column">
              <Text
                mt={5}
                align="center"
                fontSize="3xl"
                color="#DE5D83"
                fontWeight="600"
                transition="0.4s"
                _hover={{
                  color: "#5fd1ba",
                  transition: "0.4s",
                }}
              >
                Users
              </Text>
              <UserContainer
                username={username}
                parentCallback={handleReposUrlCallback}
              />
            </Flex>
            <Flex direction="column">
              <Text
                mt={5}
                align="center"
                fontSize="3xl"
                color="#DE5D83"
                fontWeight="600"
                transition="0.4s"
                _hover={{
                  color: "#5fd1ba",
                  transition: "0.4s",
                }}
              >
                Repositories
              </Text>
              <RepositoryContainer reposUrl={reposUrl} />
            </Flex>
          </Flex>
        </ChakraProvider>
      </Box>
    </Box>
  );
}

export default App;
