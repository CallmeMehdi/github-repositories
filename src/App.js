import logo from './logo.svg';
import './App.css';
import SearchInput from './components/SearchInput'

import { ChakraProvider, Box, Flex } from "@chakra-ui/react"
import UserContainer from './components/UserContainer';
import RepositoryContainer from './components/RepositoryContainer';
import React, {useState} from "react";

function App() {

  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const handleCallback = (childData) => {
    setUsername(childData)
  }

  const handleUsersCallback = (childData) => {
    setUsers(childData)
  }

  return (
    <Box p={20}>
      <Box p={20} bg="#F5F5F5" borderRadius="5">
        <ChakraProvider>
          <SearchInput parentCallback={handleCallback} />
          <Flex justify="space-around" direction={["column", "column", "row", "row"]}>
            <UserContainer username={username} parentCallback={handleUsersCallback}/>
            <RepositoryContainer />
          </Flex>
        </ChakraProvider>
      </Box>
    </Box>
  );
}

export default App;
