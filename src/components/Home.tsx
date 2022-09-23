import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

import { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hlalele  from "../images/hlalele.jpg";
interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <div>
      <Stack direction={"row"} align={"center"}>
        <Flex
          w={8}
          h={8}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={iconBg}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    </div>
  );
};

export default function SplitWithImage() {
  return (
    <div>
      <Header />
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading size={["sm", "sm", "lg"]} color="facebook.800">I am Hlalele Maroba</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Welcome to my officail Portfolio Website Where I put all my work
              related to my work many more.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={<Icon color={"yellow.500"} w={5} h={5} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Backed Developer"}
              />
              <Feature
                icon={<Icon color={"green.500"} w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Front end Developer"}
              />
              <Feature
                icon={<Icon color={"purple.500"} w={5} h={5} />}
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Data Analysis"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={Hlalele}
              objectFit={"cover"}
            />
          </Flex>
          <Button colorScheme="facebook">Download CV</Button>
        </SimpleGrid>
      </Container>
      <Footer />
    </div>
  );
}
