import * as React from "react"
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react'
import Header from './components/Header';
import Home from "./components/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
       <Header/>
       <Home/>
  </ChakraProvider>
)
