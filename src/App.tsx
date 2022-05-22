import {
  ChakraProvider
} from "@chakra-ui/react"
import RouterFile from "./routes"

export const App = () => (
  <ChakraProvider>
    <RouterFile></RouterFile>
  </ChakraProvider>
)
