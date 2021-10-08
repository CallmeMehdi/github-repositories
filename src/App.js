import logo from './logo.svg';
import './App.css';
import SearchInput from './components/SearchInput'
import { ChakraProvider, Box } from "@chakra-ui/react"

function App() {
  return (
    <Box p={20}>
      <Box p={20} bg="#F5F5F5" borderRadius="5">
        <ChakraProvider>
          <SearchInput></SearchInput>
        </ChakraProvider>
      </Box>
    </Box>
  );
}

export default App;
