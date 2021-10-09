import {
  Flex,
  Stack,
  useColorModeValue,
  Box
} from '@chakra-ui/react';
import axios from 'axios';
import Repository from './Repository';

import React, { useEffect } from "react";

export default function RepositoryContainer(props) {

  const [repos, setRepos] = React.useState([])

  useEffect(() => {
    console.log("here")
    getRepos(props.reposUrl);
  }, [props.reposUrl]);


  const getRepos = (reposUrl) => {
    if (reposUrl) {
      axios.get(reposUrl)
        .then(res => {
          console.log(res.data)
          setRepos(res.data);
        })
    }
  }

  return (
      <Flex
          minH={'90vh'}
          py={8}
          bg="#F5F5F5"
          mx="auto">
          <Stack
            boxShadow={'2xl'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            p={10}
            minW={['80vw', '80vw', '50vw']}
            spacing={8}
            overflowY={'auto'}>
              {
                repos.length ? (
                  repos.map(repo => <Repository repo={repo} />)
                ) : (
                  <Box display="flex" justifyContent="center">There are no repositories found.</Box>
                )
              }
        </Stack>
      </Flex>
  );
}
