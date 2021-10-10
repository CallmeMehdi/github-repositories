import { Flex, Stack, useColorModeValue, Box, Text } from "@chakra-ui/react";
import User from "./User";
import axios from "axios";

import React, { useEffect } from "react";

import "../assets/stylesheet.css";

/**
 * UserContainer section for listing users
 * @param {Object} props arguments passed in as props like:
 *    username: the username searched for
 *    parentCallback: function that updates the repository URL
 */
export default function UserContainer(props) {
  const [users, setUsers] = React.useState([]);

  const [reposUrl, setReposUrl] = React.useState("");

  useEffect(() => {
    getUsers(props.username);
  }, [props.username]);

  /**
   * Function that updates the reposUrl to the parent component
   * @param {string} reposUrl repositories api endpoint string
   */
  const updateReposUrl = (reposUrl) => {
    props.parentCallback(reposUrl);
  };

  /**
   * Function that gets all users that start with username
   * @param {string} username username to search for
   */
  const getUsers = (username) => {
    if (username) {
      axios
        .get(
          "https://api.github.com/search/users?q=" +
            username +
            "&page=1&per_page=10"
        )
        .then((res) => {
          setUsers(res.data.items);
        });
    }
  };

  /**
   * Function that selects a certain user making it active (css)
   * and adding the user's repositories url and updating the parent component
   * @param {string} reposUrl repositories api endpoint string
   * @param {Event} event event of the user click, we need the event.currenTarget which is the selected user element
   */
  const selectUser = (reposUrl, event) => {
    // Check if there is an active user and remove that id
    if (document.querySelector("#active-user"))
      document.querySelector("#active-user").removeAttribute("id");

    // Add active-user id to the selected element
    event.currentTarget.querySelector("div").setAttribute("id", "active-user");

    // Adding repos_url to the state
    setReposUrl(reposUrl);

    // Updating the parent component with the reposUrl of the current user
    updateReposUrl(reposUrl);
  };

  return (
    <Flex h={"90vh"} py={8} bg="#F5F5F5" mx="auto">
      <Stack
        boxShadow={"2xl"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        p={5}
        minW={["80vw", "80vw", "30vw"]}
        spacing={8}
        overflowY={"auto"}
      >
        {/**
         * Mapping all Users
         */}
        {users.length ? (
          users.map((user) => (
            <div
              onClick={(e) => {
                selectUser(user.repos_url, e);
              }}
            >
              <User user={user} />
              <hr />
            </div>
          ))
        ) : (
          <Box display="flex" justifyContent="center">
            There are no users found.
          </Box>
        )}
      </Stack>
    </Flex>
  );
}
