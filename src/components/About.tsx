import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function blogPostWithImage() {
  return (
    <div>
      <Header />
      <Center py={6}>
        <Box
          maxW={"445px"}
          w={"full"}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            />
          </Box>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              Blog
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              Boost your conversion rate
            </Heading>
            <Text color={"gray.500"}>
              My Name is Hlalele Maroba a Fourth Year Student at Botho
              University pursuing Honors Degree in Mobile Computing which i am
              going to Complete on December 2023. I am a web developer and
              designer, I am Skilled in React, Html5, CSS, bootstrap.I am always
              building Webpages that meets user needs so if you need Website or
              System for your Company or Your Business I am a right person to
              build for You.
            </Text>
          </Stack>
        </Box>
      </Center>
      <Footer />
    </div>
  );
}
