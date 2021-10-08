import {
    Flex,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function UserContainer() {
    return (
      <Flex
        minH={'90vh'}
        py={12}
        bg="#F5F5F5"
        mx="auto">
        <Stack
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          p={10}
          minW={['80vw','80vw','30vw']}
          spacing={8}
          align={'center'}>
        </Stack>
      </Flex>
    );
  }
