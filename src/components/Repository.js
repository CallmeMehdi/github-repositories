import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import "../assets/stylesheet.css";
import "../assets/github-lang-colors.css";

export default function Repository(props) {
  return (
    <Center
      style={{ transition: "0.4s", cursor: "pointer" }}
      mb={6}
      _hover={{
        background: "#F5F5F5",
        transition: "0.4s",
        boxShadow: "2xl",
      }}
      boxShadow={"base"}
      minH="8rem"
      rounded={"md"}
    >
      <Box maxW={"445px"} w={"full"} rounded={"md"} p={6} overflow={"hidden"}>
        <Stack direction={"row"} spacing={4}>
          <div>
            <Link href={props.repo.html_url} isExternal>
              <Text fontSize={"20px"} fontWeight={600} mb={5}>
                {props.repo.name}
              </Text>
            </Link>
            <Text fontSize={"14px"} fontWeight={200}>
              {props.repo.description}
            </Text>
            {props.repo.language ? (
              <Text
                m={4}
                fontSize={"14px"}
                fontWeight={400}
                display="flex"
                alignItems="center"
              >
                <span className={`dot ` + props.repo.language}></span>
                <span>{props.repo.language}</span>
              </Text>
            ) : (
              <span></span>
            )}
          </div>
        </Stack>
      </Box>
    </Center>
  );
}
