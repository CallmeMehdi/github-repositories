import {
    Flex,
    Stack,
    useColorModeValue,
    Box
} from '@chakra-ui/react';
import User from './User';
import axios from 'axios';

import React, { useEffect } from "react";

import '../assets/stylesheet.css'

export default function UserContainer(props) {

    const [users, setUsers] = React.useState([])

    const [reposUrl, setReposUrl] = React.useState("")

    useEffect(() => {
        getUsers(props.username);
    }, [props.username]);


    const updateReposUrl = (reposUrl) => {
        props.parentCallback(reposUrl);
    }

    const getUsers = (username) => {
        if (username) {
            axios.get('https://api.github.com/search/users?q=' + username + '&page=1&per_page=10')
                .then(res => {
                    setUsers(res.data.items);
                })
        }
    }

    const selectUser = (reposUrl, event) => {
        
        // Check if there is an active user and remove that id
        if (document.querySelector("#active-user"))
            document.querySelector("#active-user").removeAttribute('id');
        
        // Add active-user id to the selected element
        event.currentTarget.querySelector("div").setAttribute('id','active-user');

        // Adding repos_url to the state
        setReposUrl(reposUrl);

        // Updating the parent component with the reposUrl of the current user
        updateReposUrl(reposUrl);


    }

    return (
        <Flex
            h={'90vh'}
            py={12}
            bg="#F5F5F5"
            mx="auto">
            <Stack
                boxShadow={'2xl'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                p={5}
                minW={['80vw', '80vw', '30vw']}
                spacing={8}
                overflowY={'auto'}>
                {
                    users.length ? (
                        users.map(user => <div onClick={(e) => { selectUser(user.repos_url, e)}}><User user={user} /><hr/></div>)
                    ) : (
                        <Box display="flex" justifyContent="center">There are no users found.</Box>
                    )
                }
            </Stack>
        </Flex>
    );
}
