import React from 'react'
import { Box , Flex , Text, Heading, HStack } from '@chakra-ui/react'
const Home = () => {
  return (
    <Flex  pt={10} direction={["column" , "column" , "row"]}>
        <Box bg="blue.700" mr={5}>
              <Heading>Morging</Heading>
        </Box>
        <Box mr={5}>
            <HStack>
            <Heading>Evening</Heading>
              <Text>Hello I am here</Text>
            </HStack>
              
        </Box>
        <Box bg="blue.700" pt={40}>
              <Heading>Morging</Heading>
        </Box>
        <Box>
            <HStack>
            <Heading>Evening</Heading>
              <Text>Hello I am here</Text>
            </HStack>
              
        </Box>
        <Box bg="blue.700" pt={40}>
              <Heading>Morging</Heading>
        </Box>
        <Box>
            <HStack>
            <Heading>Evening</Heading>
              <Text>Hello I am here</Text>
            </HStack>
              
        </Box>
    </Flex>
  )
}

export default Home
