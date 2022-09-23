import React from "react";
import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import NavBar from "./Header";
import Footer from "./Footer";
import {
  FaJava,
  FaDatabase,
  FaPhp,
  FaReact,
  FaAndroid,
  FaWindows,
  FaLinux,
  FaLaptop,
  FaNetworkWired,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div>
      <NavBar />
      <Container maxW={"5xl"} py={12}>
        <Stack p={10}>
          <SimpleGrid minChildWidth="120px" spacing="40px">
            <Box>
              <FaJava fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                Desktop Applications
              </Heading>
            </Box>
            <Box>
              <FaReact fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                React JavaScript
              </Heading>
            </Box>
            <Box>
              <FaDatabase fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                Mongodb
              </Heading>
            </Box>
            <Box>
              <FaPhp fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                Php
              </Heading>
            </Box>
            <Box>
              <FaJava fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                TypeScript
              </Heading>
            </Box>
            <Box>
              <FaDatabase fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                PostgreSQL
              </Heading>
            </Box>
            <Box>
              <FaDatabase fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                Mysql
              </Heading>
            </Box>

            <Box>
              <FaJava fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                C++
              </Heading>
            </Box>
            <Box>
              <FaAndroid fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                Mobile App Development
              </Heading>
            </Box>
            <Box>
              <FaWindows fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                Windows Operating Systems
              </Heading>
            </Box>
            <Box>
              <FaLinux fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                Linux Operating Systems
              </Heading>
            </Box>
            <Box>
              <FaLaptop fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                Computer Repair
              </Heading>
            </Box>
            <Box>
              <FaNetworkWired fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                Network
              </Heading>
            </Box>
            <Box>
              <FaDatabase fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                Data Science
              </Heading>
            </Box>
          </SimpleGrid>
        </Stack>
        <Stack p={10}>
          <Heading mt={10} mb={12}>Technology</Heading>
          <SimpleGrid minChildWidth="120px" spacing="40px">
            <Box>
              <FaGithub fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                Github
              </Heading>
            </Box>
            <Box>
              <FaNodeJs fontSize="50px" />
              <Heading
                size={["sm", "sm", "sm"]}
                color="blue.900"
                fontWeight={800}
              >
                Node js
              </Heading>
            </Box>
          </SimpleGrid>
        </Stack>
      </Container>
      <Footer />
    </div>
  );
};

export default Skills;
