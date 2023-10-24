import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  IconButton,
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
  buttonSecondaryBackgroundColor,
  buttonSecondaryHoverBackgroundColor,
  buttonSecondaryTextColor,
  cardBackgroundColor,
  cardTextColor,
  primaryTextColor,
} from "../../../../component/styles";
import { PropertyType } from "../../../../util/data";
import { Link } from "react-router-dom";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { deleteData, propertiesApiUrl } from "../../../../services/api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({ data }: { data: PropertyType }) => {
  const handleDelete = async (id: number) => {
    deleteData(propertiesApiUrl + `/${id}`);
    alert("Sukses dihapus");
    window.location.reload();
  };

  return (
    <Card
      w={"100%"}
      maxWidth={"400px"}
      m={2}
      rounded={"3xl"}
      bg={cardBackgroundColor()}
      color={cardTextColor()}
      boxShadow={"lg"}
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
      <CardBody>
        <List>
          <ListItem>
            <ListIcon as={MdOutlineLocationOn} />
            {data.alamat}
          </ListItem>
          <ListItem mt={2}>
            <Text>{data.description}</Text>
          </ListItem>
        </List>
      </CardBody>
      <CardFooter
        flexGrow={1}
        display={"flex"}
        alignItems={"flex-end"}
        justify={"flex-end"}
        w={"100%"}
      >
        <Link to={`/product/edit/${data.id}`}>
          <IconButton
            aria-label="edit_icon"
            icon={<EditIcon />}
            bg={buttonSecondaryBackgroundColor()}
            color={"black"}
            _hover={{ background: buttonSecondaryHoverBackgroundColor() }}
            fontWeight={400}
          ></IconButton>
        </Link>
        <IconButton
          aria-label="edit_icon"
          icon={<DeleteIcon />}
          bg={"red.300"}
          _hover={{ background: "red.400" }}
          color={"white"}
          fontWeight={400}
          ml={4}
          onClick={() => handleDelete(data.id)}
        ></IconButton>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
