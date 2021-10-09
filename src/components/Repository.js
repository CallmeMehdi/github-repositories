import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Link
} from '@chakra-ui/react';

export default function Repository(props) {

    return (
        <Center style={{ transition: "0.4s", cursor: "pointer" }} mb={6} _hover={{
            background: "#F5F5F5",
            transition: "0.4s",
            boxShadow: '2xl'
        }}
            boxShadow={'base'}
            h="8rem"
            rounded={'md'}>
            <Box
                maxW={'445px'}
                w={'full'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Stack direction={'row'} spacing={4} >
                    <div>
                        {props.repo.name}
                    </div>
                </Stack>
            </Box>
        </Center>
    )
}