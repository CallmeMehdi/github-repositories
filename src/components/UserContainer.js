import {
    Flex,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import User from './User';
import axios from 'axios';

import React, {useEffect} from "react";

export default function UserContainer(props) {

    const [users, setUsers] = React.useState([])

    useEffect(() => {
        getUsers(props.username);
    }, [props.username]);


    const updateUsers = () => {
        props.parentCallback(users);
    }

    const getUsers = (username) => {
        console.log(username)
        if(username){
            axios.get('https://api.github.com/search/users?q=' + username)
            .then(res => {
                console.log(res.data.items)
                setUsers(res.data.items);
                updateUsers();
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
                minW={['80vw', '80vw', '30vw']}
                spacing={8}>
                <User/>

                <hr/>
                <User />
            </Stack>
        </Flex>
    );
}
