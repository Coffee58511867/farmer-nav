import React from 'react'
import { Box , Flex , Text, Heading, HStack } from '@chakra-ui/react'
import Header from './Header'
const Home = () => {
  return (
   <div>
    <Header/>
    <Flex  pt={10} direction={["column" , "column" , "row"]}>
        <Box bg="blue.700" mr={5} height="100vh">
              <Heading>Morging</Heading>
        </Box>
        <Box mr={5} height="100vh" bg="facebook.500" maxW="full">
            <HStack>
            <Heading>Evening</Heading>
              <Text>Hello I am here</Text>
            </HStack>
              
        </Box>
    
    </Flex>
    </div>
  )
}

export default Home
