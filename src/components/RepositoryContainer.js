import {
  Flex,
  Stack,
  useColorModeValue,
  Box,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import axios from "axios";
import Repository from "./Repository";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useEffect } from "react";

/**
 * Repository container section for listing repositories
 * @param {Object} props arguments passed in as props like:
 *    reposUrl: repositories url
 *    refresh: 0 or 1 indicating if the list should refresh
 *    parentCallback: function that updates refresh
 */
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

  /**
   * Function that gets all repositories
   * @param {string} reposUrl: api endpoint url of getting current users repositories
   */
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
      });
    }
  };

  /**
   * Function that filters all repositories using search
   * @param {Event} event: event of the search bar change, we need the event.target.value which is the searched repository
   */
  const filterRepos = (event) => {
    let regexp = new RegExp("^" + event.target.value);

    //Filtering repositories using regex
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
        {/**
         * Respositories search bar
         */}
        <InputGroup size="md" bg="white">
          <InputLeftElement children={<Icon as={AiOutlineSearch} />} />
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Filter repositories by name"
            onChange={filterRepos}
            data-testid="search-repo"
          />
        </InputGroup>
        {/**
         * Mapping all Filtered Repositories
         */}
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
