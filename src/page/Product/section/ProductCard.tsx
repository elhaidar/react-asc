import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdOutlineLocationOn } from "react-icons/md";
import {
  borderPremiumColor,
  buttonSecondaryTextColor,
  cardBackgroundColor,
  cardTextColor,
  primaryTextColor,
} from "../../../component/styles";
import { PropertyType } from "../../../util/data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({ data }: { data: PropertyType }) => {
  return (
    <Card
      w={"100%"}
      maxWidth={"400px"}
      m={2}
      rounded={"3xl"}
      bg={cardBackgroundColor()}
      color={cardTextColor()}
      boxShadow={"md"}
      display={"flex"}
      flexDirection={"column"}
      h={"100%"}
    >
      <CardHeader>
        <Stack
          position={"relative"}
          width={"100%"}
          height={"200px"}
          objectFit={"contain"}
        >
          <Image
            src={data.image_url}
            alt="img"
            objectFit={"cover"}
            rounded={"3xl"}
            width={"100%"}
            height={"100%"}
          />
        </Stack>
      </CardHeader>
      <CardBody>
        <Flex align={"flex-end"} justify={"space-between"}>
          <Stack>
            <Text color={primaryTextColor()} fontSize={"xl"} fontWeight={500}>
              $550,000
            </Text>
            <Text>{data.property_name}</Text>
          </Stack>
          {data.is_premium && (
            <Button
              variant={"outline"}
              rounded={"3xl"}
              fontSize={"xs"}
              mr={4}
              borderColor={borderPremiumColor()}
              color={buttonSecondaryTextColor()}
            >
              PREMIUM
            </Button>
          )}
        </Flex>
      </CardBody>
      <Divider borderColor={"gray.300"} />
      <CardFooter flexGrow={1}>
        <List w={"100%"}>
          <ListItem>
            <ListIcon as={MdOutlineLocationOn} />
            {data.alamat}
          </ListItem>
          <ListItem mt={2}>
            <Text>{data.description}</Text>
          </ListItem>
        </List>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
