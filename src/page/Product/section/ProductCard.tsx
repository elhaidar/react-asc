import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineCar } from "react-icons/ai";
import { BiBath, BiBed } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({ data }: { data: string }) => {
  return (
    <Card
      w={"100%"}
      maxWidth={"400px"}
      m={2}
      rounded={"3xl"}
      bg={"white"}
      boxShadow={"md"}
    >
      <CardHeader>
        <Stack
          position={"relative"}
          width={"100%"}
          height={"200px"}
          objectFit={"contain"}
        >
          <Image
            src={data}
            alt="img"
            objectFit={"cover"}
            rounded={"3xl"}
            width={"100%"}
            height={"100%"}
          />
        </Stack>
      </CardHeader>
      <CardBody>
        <Text color={"primary.main"} fontSize={"xl"} fontWeight={500}>
          $550,000
        </Text>
        <Text>The Bismillah Apartment</Text>
      </CardBody>
      <Divider borderColor={"gray.300"} />
      <CardFooter>
        <List w={"100%"}>
          <ListItem>
            <ListIcon as={MdOutlineLocationOn} />
            Jakarta, Indonesia
          </ListItem>
          <ListItem mt={2}>
            <List
              fontSize={"sm"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <ListItem>
                <ListIcon as={BiBed} />4 Bed
              </ListItem>
              <ListItem>
                <ListIcon as={BiBath} />2 Bath
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCar} />1 Parking
              </ListItem>
            </List>
          </ListItem>
        </List>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
