import * as React from "react"
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react'

import MainRoutes from "./routes";

export const App = () => (
  <ChakraProvider theme={theme}>
      <MainRoutes/>
  </ChakraProvider>
)
