import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
  colors: {
    primary: {
        main: "#4B73FF",
    },
    secondary: {
        main: "#F7F9FB",
    }
  },
  styles: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    global: (props: any) => ({
      body: {
        bg: mode("#F7F9FB", "black")(props),
      }
    })
  },
})

export default theme