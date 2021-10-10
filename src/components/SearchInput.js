import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  PhoneIcon,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { GrGithub } from "react-icons/gr";
import React from "react";

/**
 * SearchInput component for GitHub users search bar
 * @param {Object} props arguments passed in as props like:
 *    removeRepos: function that removes repositories when searching
 *    parentCallback: function that updates the username
 */
export default function SearchInput(props) {
  const [value, setValue] = React.useState("");

  /**
   * Handle function for search input to remove
   * current active user and remove current repositories
   * @param {Event} event event of the search bar change, we need the event.target.value which is the new username
   */
  const handleChange = (event) => {
    // Remove active user when search new
    if (document.querySelector("#active-user"))
      document.querySelector("#active-user").removeAttribute("id");

    //Remove current repositories when searching
    props.removeRepos();
    setValue(event.target.value);
  };

  /**
   * Updating the username with the value searched for
   */
  const updateUsername = () => {
    props.parentCallback(value);
  };

  return (
    <InputGroup size="md" bg="white">
      {/**
       * GitHub Icon
       */}
      <InputLeftElement
        pointerEvents="none"
        color="gray.300"
        fontSize="1.2em"
        children={<Icon as={GrGithub} />}
      />
      {/**
       * Input search bar
       */}
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Type a GitHub username"
        value={value}
        onChange={handleChange}
        data-testid="search-user"
      />
      {/**
       * Search button
       */}
      <InputRightElement width="5.5rem">
        <Button h="1.75rem" size="sm" onClick={updateUsername}>
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
