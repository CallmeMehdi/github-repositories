import {
  Flex,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';

import React, { useEffect } from "react";

export default function RepositoryContainer(reposUrl) {

  const [repos, setRepos] = React.useState([])





  const getRepos = (username) => {
    if (username) {
      axios.get(reposUrl)
        .then(res => {
          setRepos(res.data.items);
        })
    }
  }

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
        minW={['80vw', '80vw', '50vw']}
        spacing={8}
        align={'center'}>
      </Stack>
    </Flex>
  );
}
