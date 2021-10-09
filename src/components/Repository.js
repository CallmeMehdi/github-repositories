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
    <Center style={{ transition: "0.4s", cursor: "pointer" }} mb={4} _hover={{
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
                {props.repo.name}
            </Stack>
        </Box>
    </Center>
}