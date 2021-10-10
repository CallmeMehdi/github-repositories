import logo from "./logo.svg";
import "./App.css";
import SearchInput from "./components/SearchInput";
import "./assets/stylesheet.css";

import { ChakraProvider, Box, Flex, Text } from "@chakra-ui/react";
import UserContainer from "./components/UserContainer";
import RepositoryContainer from "./components/RepositoryContainer";
import React, { useState } from "react";

/**
 * Main Component
 */
function App() {
  const [username, setUsername] = useState("");
  const [reposUrl, setReposUrl] = useState("");
  const [refresh, setRefresh] = useState(0);

  /**
   * Handling callback from SearchInput component
   * to set the username
   * @param {string} ChildData the username searched for
   */
  const handleCallback = (childData) => {
    setUsername(childData);
  };

  /**
   * Handling callback from UserContainer component
   * to set the username
   * @param {string} ChildData the user's repositories api endpoint link
   */
  const handleReposUrlCallback = (childData) => {
    setReposUrl(childData);
  };

  /**
   * Removing the Repositories url from the state
   * and setting refresh to 1 so it refreshes the repository
   * list to empty
   */
  const removeReposUrl = () => {
    setReposUrl("");
    setRefresh(1);
  };

  /**
   * Setting refresh to 0 so it can load repositories
   */
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
          {/**
           * Title of Home page
           */}
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
            data-testid="home-title"
          >
            GitHub Repositories searcher
          </Text>

          {/**
           * Home search bar, used
           * to search GitHub users
           */}
          <SearchInput
            parentCallback={handleCallback}
            removeRepos={removeReposUrl}
          />

          {/**
           * Component containing users
           * container and repositories container
           */}
          <Flex
            justify="space-around"
            direction={["column", "column", "row", "row"]}
          >
            <Flex direction="column">
              {/**
               * Users title
               */}
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
              {/**
               * User container, listing all
               * users that start with username
               */}
              <UserContainer
                username={username}
                parentCallback={handleReposUrlCallback}
              />
            </Flex>
            {/**
             * Repositories title
             */}
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
              {/**
               * Repositories container, listing all
               * repositories from reposUrl
               */}
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
