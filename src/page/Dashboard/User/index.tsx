/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import TableCompo from "../../../component/Table";
import { Avatar, Stack } from "@chakra-ui/react";
import { reqresUserApiUrl } from "../../../services/api";
import axios from "axios";

const UserPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(5);
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const res = await axios.get(
        reqresUserApiUrl + `?page=${currentPage}&per_page=${currentLimit}`
      );
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage, currentLimit]);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  const columns = [
    {
      title: "Gambar",
      key: "last_name",
      render: (data: any) => (
        <Avatar
          src={data.avatar}
          width={"50px"}
          height={"50px"}
          objectFit={"cover"}
        />
      ),
    },
    {
      title: "Email",
      key: "email",
    },
    {
      title: "First Name",
      key: "first_name",
    },
    {
      title: "Last Name",
      key: "last_name",
    },
  ];

  return (
    <Stack minH={"100vh"}>
      <TableCompo
        columns={columns}
        data={data && data}
        tableName="User"
        currentLimit={currentLimit}
        currentPage={currentPage}
        setCurrentPage={(value: any) => setCurrentPage(value)}
        setCurrentlimit={(value: any) => setCurrentLimit(value)}
        description="tes"
      />
    </Stack>
  );
};

export default UserPage;
