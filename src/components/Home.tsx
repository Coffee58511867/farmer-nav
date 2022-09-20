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
  } from '@chakra-ui/react';
 
//   import {
//     IoAnalyticsSharp,
//     IoLogoBitcoin,
//     IoSearchSharp,
//   } from 'react-icons/io5';
  import { ReactElement } from 'react';
  import Header from './Header';
  import Footer from './Footer';
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
 
    return (
       <div>
        
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
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
    <Header/>
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
          
            <Heading size={["sm" , "sm" , "lg"]}>I am Hlalele Maroba</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Welcome to my officail Portfolio Website Where I put all my work related to my work many more.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon  color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Backed Developer'}
              />
              <Feature
                icon={<Icon  color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Front end Developer'}
              />
              <Feature
                icon={
                  <Icon  color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Data Analysis'}
              />
            </Stack>
          </Stack> 
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
            />
          </Flex>
          <Button colorScheme="facebook">
           
              Download CV
        </Button>
        </SimpleGrid>
       
      </Container>
      <Footer/>
      </div>
    );
  }