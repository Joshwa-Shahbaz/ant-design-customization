import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

const TableCom = () => {
  const data = [
    {
      id: 1,
      name: "joshwa",
      email: "joshwashahbaz2@gmail.com",
      address: "abc 123",
      role: "talent",
    },
    {
      id: 2,
      name: "haseeb",
      email: "haseeb42@gmail.com",
      address: "abc 123",
      role: "talent",
    },
    {
      id: 3,
      name: "abdullah",
      email: "abdullah@gmail.com",
      address: "abc 123",
      role: "talent",
    },
    {
      id: 4,
      name: "hammad",
      email: "hammad@gmail.com",
      address: "abc 123",
      role: "talent",
    },
    {
      id: 5,
      name: "muneeb",
      email: "muneeb@gmail.com",
      address: "abc 123",
      role: "talent",
    },
  ];

  const columns: ColumnsType<any> = [
    {
      key: "1",
      title: "id",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "address",
      dataIndex: "address",
    },
    {
      key: "5",
      title: "role",
      dataIndex: "role",
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        style={{ marginTop: "25px", padding: "25px" }}
      ></Table>
    </div>
  );
};

export default TableCom;
