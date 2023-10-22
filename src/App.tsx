import { Container } from "@chakra-ui/react";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <Container maxWidth={"8xl"}>
      <AppRouter />
    </Container>
  );
}

export default App;
