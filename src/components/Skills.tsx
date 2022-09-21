import React from 'react'
import { Container, Flex, Box , Text, Heading , SimpleGrid , Image , Stack} from '@chakra-ui/react'
import java from '../images/java.png';
import mo from '../images/mo.png';
import php from '../images/php.png'
import re from '../images/type.png'
import postg from '../images/postg.png'
import c from '../images/c.png'
import NavBar from './Header'
import Footer from './Footer'

const Skills = () => {
  return (
    <div>
      <NavBar/>
      <Container  maxW={'5xl'} py={12}>
        <Stack p={10}>
        <Heading size={["1xl" , "1x1" , "2xl"]} color="blue.900">My Skills</Heading>
      <SimpleGrid minChildWidth='120px' spacing='40px'>
  <Box bg='tomato' height='80px'><Image src={java} /></Box>
  <Box bg='tomato' height='80px'><Image src={mo} /></Box>
  <Box bg='tomato' height='80px'><Image src={php} /></Box>
  <Box bg='tomato' height='80px'><Image src={re} /></Box>
  <Box bg='tomato' height='80px'><Image src={postg} /></Box>
  <Box bg='tomato' height='80px'><Image src={c} /></Box>
  
</SimpleGrid>
</Stack>
      </Container>
      <Footer/>
    </div>
  )
}

export default Skills
