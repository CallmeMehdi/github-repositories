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
  const [refresh, setRefresh] = useState(0);

  const handleCallback = (childData) => {
    setUsername(childData);
  };

  const handleReposUrlCallback = (childData) => {
    setReposUrl(childData);
  };

  const removeReposUrl = () => {
    setReposUrl("");
    setRefresh(1);
  };

  const removeRefresh = () => {
    setRefresh(0);
  };

  return (
    <Box p={20} boxShadow="2xl">
      <Box
        p={20}
        bg="#F5F5F5"
        borderRadius="5"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 3px 8px"
      >
        <ChakraProvider>
          <Text
            mt={4}
            mb={8}
            align="center"
            fontSize="4xl"
            color="#DE5D83"
            fontWeight="600"
            transition="0.4s"
            _hover={{
              color: "#5fd1ba",
              transition: "0.4s",
            }}
          >
            GitHub Repositories searcher
          </Text>
          <SearchInput
            parentCallback={handleCallback}
            removeRepos={removeReposUrl}
          />
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
              <RepositoryContainer
                reposUrl={reposUrl}
                refresh={refresh}
                parentCallback={removeRefresh}
              />
            </Flex>
          </Flex>
        </ChakraProvider>
      </Box>
    </Box>
  );
}

export default App;
