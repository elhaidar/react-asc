/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  HStack,
  IconButton,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  backgroundColor,
  customBorder,
  primaryColor,
  textColor,
  secondaryTextColor,
  buttonBackgroundColor,
  buttonTextColor,
} from "../styles";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const TableCompo = (props: {
  tableName: string;
  description?: string;
  columns: any;
  data: any;
  currentLimit?: any;
  currentPage?: any;
  setCurrentPage?: any;
  setCurrentlimit?: any;
  additionalComponent?: any;
}) => {
  // const totalPages: any = [];
  // for (let i = 1; i <= props.data.total_pages; i++) {
  //   totalPages.push(i);
  // }

  const handleDecrementPagination = () => {
    if (props.currentPage > 1) {
      props.setCurrentPage(props.currentPage - 1);
    }
  };
  const handleIncrementPagination = () => {
    if (props.currentPage >= 1 && props.currentPage < props.data.total_pages) {
      props.setCurrentPage(props.currentPage + 1);
    }
  };

  return props.data.data ? (
    props.data.data.length > 0 ? (
      <Stack
        width={{ base: "95vw", md: "100%" }}
        marginX={"auto"}
        marginBottom={"20px"}
        padding={"5px"}
        borderRadius={"xl"}
        backgroundColor={backgroundColor()}
        border={customBorder()}
      >
        <HStack
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          padding={"20px"}
        >
          <Stack lineHeight={"1"}>
            <Text fontSize={"2xl"} color={primaryColor()} as={"b"}>
              {props.tableName}
            </Text>
            <Text color={secondaryTextColor()} fontSize={"12px"}>
              {props.description}
            </Text>
          </Stack>
          {props.additionalComponent}
        </HStack>
        <Stack overflowX={{ base: "auto", md: "hidden" }}>
          <Table>
            <Thead color={secondaryTextColor()} fontSize={"md"}>
              <Tr border={"none"}>
                {props.columns.map((cel: any, index: number) => (
                  <Td
                    borderBottom={customBorder()}
                    key={index}
                    isNumeric={cel?.align === "right" ? true : false}
                  >
                    {cel.title}
                  </Td>
                ))}
              </Tr>
            </Thead>
            <Tbody color={textColor()} fontSize={"md"}>
              {props.data.data.map((row: any, index: number) => (
                <Tr key={index}>
                  {props.columns.map((column: any, index: number) => (
                    <Td
                      border={"none"}
                      key={index}
                      isNumeric={column?.align === "right" ? true : false}
                      whiteSpace={"nowrap"}
                    >
                      {column.render ? column?.render(row) : row[column.key]}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Stack>

        {/* //pagination  */}
        {props.currentLimit < props.data.total ? (
          <HStack justifyContent={"flex-end"} p={4}>
            {props.data.total_pages > 1 && (
              <>
                <IconButton
                  aria-label="back-button"
                  icon={<ArrowBackIcon />}
                  onClick={() => handleDecrementPagination()}
                ></IconButton>
                <Button>{props.currentPage}</Button>
                <IconButton
                  aria-label="forward-button"
                  icon={<ArrowForwardIcon />}
                  onClick={() => handleIncrementPagination()}
                ></IconButton>
              </>
            )}
            <Stack>
              <Select
                value={props.currentLimit}
                onChange={(e) => {
                  props.setCurrentlimit(e.target.value);
                  props.setCurrentPage(1);
                }}
                backgroundColor={buttonBackgroundColor()}
                border={customBorder()}
                color={buttonTextColor()}
              >
                <option value="5">5</option>
                <option value="10">10</option>
              </Select>
            </Stack>
            {/* {props.data.prevPage != 1 && props.data.prevPage !== 0 ? (
              <>
                {props.data.prevPage - 1 > 1 ? (
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    onClick={() => props.setCurrentPage(props.data.prevPage)}
                  >
                    <IoIosArrowBack />
                  </Button>
                ) : null}
                <Button
                  size={"sm"}
                  variant={"outline"}
                  onClick={() => props.setCurrentPage(1)}
                >
                  1
                </Button>
                {props.data.prevPage - 1 !== 1 ? (
                  <Button size={"sm"} variant={"outline"}>
                    ...
                  </Button>
                ) : null}
              </>
            ) : null}

            <Stack>
              <Select
                value={props.currentLimit}
                onChange={(e) => {
                  props.setCurrentlimit(e.target.value);
                  props.setCurrentPage(1);
                }}
                backgroundColor={inputBackgroundColor()}
                border={customBorder()}
                color={inputColor()}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </Select>
            </Stack> */}
          </HStack>
        ) : null}
      </Stack>
    ) : (
      <Stack
        maxWidth={"1440px"}
        width={{ base: "100vw", md: "100%" }}
        height={"400px"}
        marginX={"auto"}
        marginBottom={"20px"}
        padding={"5px"}
        borderRadius={"xl"}
        backgroundColor={backgroundColor()}
        border={customBorder()}
      >
        <Text margin={"auto"} as={"b"} color={primaryColor()}>
          Tidak ada Data
        </Text>
      </Stack>
    )
  ) : null;
};

export default TableCompo;
