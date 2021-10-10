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

/**
 * Repository component
 * @param {Object} props containing the property repo that has the repository object returned from the GitHub API
 */
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
    <Stack
      style={{ transition: "0.4s", cursor: "pointer" }}
      mb={6}
      _hover={{
        background: "#F5F5F5",
        transition: "0.4s",
        boxShadow: "2xl",
        color: "#5fd1ba",
      }}
      boxShadow={"base"}
      rounded={"md"}
      flexFlow="wrap"
    >
      <Link
        href={props.repo.html_url}
        isExternal
        style={{ textDecoration: "none" }}
        flexFlow="wrap"
        w="100%"
      >
        <Box
          maxW={"445px"}
          w={"full"}
          rounded={"md"}
          p={[2, 2, 6, 6]}
          overflow={"hidden"}
          flexFlow="wrap"
        >
          <Stack direction={"row"} spacing={4}>
            <div style={{width: "100%", flexFlow: "wrap"}}>
              <Text
                fontSize={"20px"}
                fontWeight={600}
                mb={5}
              >
                {props.repo.name}
              </Text>

              <Text fontSize={"14px"} fontWeight={200}>
                {props.repo.description}
              </Text>
              {props.repo.language || props.repo.stargazers_count ? (
                <Flex flexFlow="wrap">
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
                    <span>
                      Updated On {new Date(props.repo.updated_at).getDate()}{" "}
                      {monthNames[new Date(props.repo.updated_at).getMonth()]}
                    </span>
                  </Text>
                </Flex>
              ) : (
                <span></span>
              )}
              {props.repo.stargazers_count ? <span></span> : <span></span>}
            </div>
          </Stack>
        </Box>
      </Link>
    </Stack>
  );
}
