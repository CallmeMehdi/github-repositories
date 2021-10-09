import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Link,
  Flex,
  Icon,
} from "@chakra-ui/react";
import "../assets/stylesheet.css";
import "../assets/github-lang-colors.css";
import { AiFillStar, AiOutlineFork } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";

export default function Repository(props) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

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
            {props.repo.language || props.repo.stargazers_count ? (
              <Flex>
                {props.repo.language ? (
                  <Text
                    m={3}
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
                {props.repo.stargazers_count ? (
                  <Text
                    m={3}
                    fontSize={"14px"}
                    fontWeight={400}
                    display="flex"
                    alignItems="center"
                  >
                    <Icon mr={2} as={AiFillStar} />
                    <span>{props.repo.stargazers_count}</span>
                  </Text>
                ) : (
                  <Text
                    m={3}
                    fontSize={"14px"}
                    fontWeight={400}
                    display="flex"
                    alignItems="center"
                  >
                    <Icon mr={2} as={AiFillStar} />
                    <span>0</span>
                  </Text>
                )}
                <Text
                  m={3}
                  fontSize={"14px"}
                  fontWeight={400}
                  display="flex"
                  alignItems="center"
                >
                  <Icon mr={2} as={AiOutlineFork} />
                  <span>{props.repo.forks_count}</span>
                </Text>

                {props.repo.license ? (
                  <Text
                    m={3}
                    fontSize={"14px"}
                    fontWeight={400}
                    display="flex"
                    alignItems="center"
                  >
                    <Icon mr={3} as={FaBalanceScale} />
                    <span>{props.repo.license.name}</span>
                  </Text>
                ) : (
                  <span></span>
                )}

                <Text
                  m={3}
                  fontSize={"14px"}
                  fontWeight={400}
                  display="flex"
                  alignItems="center"
                >
                  <span>Last Updated at {new Date(props.repo.updated_at).getDate()} {monthNames[new Date(props.repo.updated_at).getMonth()]}</span>
                </Text>
              </Flex>
            ) : (
              <span></span>
            )}
            {props.repo.stargazers_count ? <span></span> : <span></span>}
          </div>
        </Stack>
      </Box>
    </Center>
  );
}
