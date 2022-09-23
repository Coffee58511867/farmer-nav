import { Container, VStack, Flex , Heading , Text ,
     useColorMode, useColorModeValue,
      Button, HStack} from "@chakra-ui/react";
import NavBar from "./Header";
import Footer from './Footer';
const Payment = () => {
    const {toggleColorMode} = useColorMode();
     const bgColor = useColorModeValue("gray.50", "whiteAlpha.50" );
  return (
    <div>
        <NavBar/>
      <Container maxW="container.xl" p={0} >
        <Flex h={{base : "auto" , md : "100vh"}} py={[0, 10 , 20]} direction={{base : "column-reverse" , md: "row"}}  >
          <VStack
            w="full"
            h="full"
            p={7}
            spacing={10}
            alignItems="flex-start"
         
          >
            
            <Heading size={["1xl" , "1x1" , "2xl"]} color="blue.900" >My Experience</Heading>
            <VStack >
            <Heading size= "sm" color="blue.400">2019-2023 : Botho University </Heading>
            <Text>Degree Honors in Mobile Compuing</Text>
            </VStack>
            <VStack>
            <Heading size= "sm" color="blue.400">2022 July - December : Africa Code Academy </Heading>
            <Text>I was working in Africa Code Academy as an intern developing web application as FullStack Developer</Text>
            </VStack>
            <VStack>
            <Heading size= "sm" color="blue.400">2022 June - Present : Impact School </Heading>
            <Text>I am currently working as a Mentor at Impact School where I teach students coding and training the national team that will
         represent Lesotho in Robotics Championship, Apart from that I worked at World Vision Where i was collecting data.</Text>
            </VStack>
            <VStack>
            <Heading size= "sm" color="blue.400">2022 August : Mobile App Workshop Trainer</Heading>
            <Text>I am currently working as a Mentor at Impact School where I teach students coding and training the national team that will
         represent Lesotho in Robotics Championship, Apart from that I worked at World Vision Where i was collecting data.</Text>
            </VStack>
         
          </VStack>
          <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems="flex-start"
            bg={bgColor}
            mt={["20px" , "20px" , "0px"]}
          ><VStack spacing={2} alignItems="flex-start">
          <Heading size={["1xl" , "1x1" , "2xl"]} color="blue.900">Certificates</Heading>
          <Text>If the price is too hard on your eyes</Text>
          <Button onClick={toggleColorMode}>try changing the theme</Button>
          </VStack>
            <HStack justifyContent="space-between" w="full">
               <Text>Master Java Programing Language</Text>
               <Heading size="sm">Udemy</Heading>
            </HStack>
            <HStack justifyContent="space-between" w="full">
            <Text>Linux Management Server and Security</Text>
               <Heading size="sm">Cousera</Heading>
            </HStack>
         
    
            <HStack justifyContent="space-between" w="full">
            <Text>Windows Management Server and Security</Text>
               <Heading size="sm">Cousera</Heading>
            </HStack>
            <HStack justifyContent="space-between" w="full">
            <Text>Master Data Science in Python</Text>
               <Heading size="sm">Great Learning</Heading>
            </HStack>
            <HStack justifyContent="space-between" w="full">
            <Text>Master Data Science in Python</Text>
               <Heading size="sm">Great Learning</Heading>
            </HStack>
            <HStack justifyContent="space-between" w="full">
            <Text>Master Data Analytics using Excel and Sql</Text>
               <Heading size="sm">Great Learning</Heading>
            </HStack>
           
          </VStack>
        </Flex>
      </Container>
      <Footer/>
    </div>
  );
};

export default Payment;
