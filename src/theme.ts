import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
  colors: {
    primary: {
      main: "#4B73FF",
      darker: "#3c5bcc",
    },
    secondary: "#F7F9FB",
    black: "#0C0C1D"
  },
})

export default theme