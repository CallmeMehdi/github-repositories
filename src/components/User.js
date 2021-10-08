import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';

export default function User(props) {
    return (
        <Center mb={4}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                // boxShadow={'2xl'}
                rounded={'md'}
                // p={6}
                overflow={'hidden'}>
                <Stack direction={'row'} spacing={4} align={'center'}>
                    <Avatar
                        src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                        alt={'Author'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                        <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                    </Stack>
                </Stack>
                {/* <Stack>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    </Text>
                </Stack> */}

            </Box>
        </Center>
    );
}