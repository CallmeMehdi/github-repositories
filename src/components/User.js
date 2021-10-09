import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    Link 
} from '@chakra-ui/react';
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function User(props) {

    const [followers, setFollowers] = React.useState(0)

    const [following, setFollowing] = React.useState(0)


    useEffect(() => {
        // Setting up followers variable
        axios.get(props.user.followers_url)
            .then(res => {
                setFollowers(res.data.length);
            })

        // // Setting up following variable
        // axios.get(props.user.following_url)
        //     .then(res => {
        //         setFollowing(res.data.length);
        //     })
    }, [])


    return (
        <Center style={{transition: "0.4s", cursor: "pointer"}} mb={4} _hover={{
            background: "#F5F5F5",
            transition: "0.4s"
          }}
          rounded={'md'}>
            <Box
                maxW={'445px'}
                w={'full'}
                // boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Stack direction={'row'} spacing={4} align={'center'}>
                    <Avatar
                        src={props.user.avatar_url}
                        alt={'Author'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Link href={props.user.html_url} isExternal><Text fontWeight={600}>{props.user.login}</Text></Link>
                        <Text color={'gray.500'}>{followers} Followers ·  </Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}