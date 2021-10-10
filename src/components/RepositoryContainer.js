import {
  Flex,
  Stack,
  useColorModeValue,
  Box,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import Repository from "./Repository";

import React, { useEffect } from "react";

export default function RepositoryContainer(props) {
  const [repos, setRepos] = React.useState([]);
  const [filteredRepos, setFilteredRepos] = React.useState([]);

  useEffect(() => {
    if (props.refresh) {
      setRepos([]);
      props.parentCallback();
    } else {
      getRepos(props.reposUrl);
    }
  }, [props.reposUrl, props.refresh]);

  const getRepos = (reposUrl) => {
    if (reposUrl) {
      axios.get(reposUrl).then((res) => {
        // Adding to total repositories
        setRepos(
          Array.from(res.data).sort((a, b) =>
            a.updated_at < b.updated_at ? 1 : -1
          )
        );

        // Adding to filtered repos
        setFilteredRepos(
          Array.from(res.data).sort((a, b) =>
            a.updated_at < b.updated_at ? 1 : -1
          )
        );

        // setRepos(res.data);
      });
    }
  };

  const filterRepos = (event) => {
    let regexp = new RegExp("^" + event.target.value);

    setFilteredRepos(repos.filter((repo) => repo.name.match(regexp)));
  };

  return (
    <Flex style={{ height: "90vh" }} py={8} bg="#F5F5F5" mx="auto">
      <Stack
        boxShadow={"2xl"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        p={[2, 2, 10, 10]}
        w={["80vw", "80vw", "50vw"]}
        spacing={8}
        overflowY={"auto"}
      >
        <InputGroup size="md" bg="white">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Filter repositories by name"
            onChange={filterRepos}
          />
        </InputGroup>
        {filteredRepos.length ? (
          filteredRepos.map((repo) => <Repository repo={repo} />)
        ) : (
          <Box display="flex" justifyContent="center">
            There are no repositories found.
          </Box>
        )}
      </Stack>
    </Flex>
  );
}
