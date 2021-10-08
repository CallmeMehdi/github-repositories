import logo from './logo.svg';
import './App.css';
import SearchInput from './components/SearchInput'
import { ChakraProvider, Box, Flex } from "@chakra-ui/react"
import UserContainer from './components/UserContainer';
import RepositoryContainer from './components/RepositoryContainer';

function App() {
  return (
    <Box p={20}>
      <Box p={20} bg="#F5F5F5" borderRadius="5">
        <ChakraProvider>
          <SearchInput></SearchInput>
          <Flex justify="space-around" direction={["column","column","row","row"]}>
            <UserContainer />
            <RepositoryContainer />
          </Flex>
        </ChakraProvider>
      </Box>
    </Box>
  );
}

export default App;
