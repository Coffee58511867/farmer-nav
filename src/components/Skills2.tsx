import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import Header from '../components/Header';
  import Footer from '../components/Footer';
  interface StatsCardProps {
    title: string;
    stat: string;
  }
  

  function StatsCard(props: StatsCardProps) {
    const { title, stat } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} color="facebook.600">
          {title}
        </StatLabel>
        <StatNumber fontSize={'1xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
        <Box>
        <Header/>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          color="facebook.600"
          fontWeight={'bold'}>
          My Skills Below
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'Desktop Application'} stat={'Java Programming Language'} />
          <StatsCard title={'Mobile Applications'} stat={'Android Mobile Application development'} />
          <StatsCard title={'React Javascript'} stat={'React js '} />
        </SimpleGrid>
        <SimpleGrid mt={3} columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'TypeScript'} stat={'Deloping web applications using TypeScript'} />
          <StatsCard title={'Linux'} stat={'Linux Server Management and Security'} />
          <StatsCard title={'Windows'} stat={'Windows Server Management and Security'} />
        </SimpleGrid>
        <SimpleGrid mt={3} columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'Computer'} stat={'Repairing of Computers'} />
          <StatsCard title={'Mongodb'} stat={'Mongo Database'} />
          <StatsCard title={'PostgreSql'} stat={'PostgreSql Database'} />
        </SimpleGrid>
        <SimpleGrid mt={3} columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'MYSQL'} stat={'MYSQL Database'} />
          <StatsCard title={'Firebase'} stat={'Firebase Database'} />
          <StatsCard title={'Data Science'} stat={'DataScience in R and Python'} />
        </SimpleGrid>
        <SimpleGrid mt={3} columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'Network'} stat={'Configurations of network devices'} />
          <StatsCard title={'Full Stack Development'} stat={'Building both frontend and Backend'} />
          <StatsCard title={'AI'} stat={'Artificial Intellenge'} />
        </SimpleGrid>
      </Box>
      <Footer/>
      </Box>
    );
  }