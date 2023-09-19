import React, { useState } from "react";

import TableCom from "./TableCom";
import type { MenuProps, ThemeConfig } from "antd";
import { ConfigProvider, Layout, Menu, Switch } from "antd";

const { Header, Content, Sider } = Layout;

const config: ThemeConfig = {
  token: {
    colorPrimary: "#132F55",
    borderRadius: 5,
  },
  components: {
    Table: {
      headerBg: "#132F55",
      headerColor: "white",
      rowHoverBg: "#718299",
      colorText: "#132F55",
      borderColor: "#132F55",
    },
    Layout: {
      headerBg: "#132F55",
    },
  },
};

const config2: ThemeConfig = {
  token: {
    colorPrimary: "red",
    borderRadius: 5,
  },
  components: {
    Table: {
      headerBg: "red",
      headerColor: "white",
      rowHoverBg: "white",
      colorText: "red",
      borderColor: "red",
    },
    Layout: {
      headerBg: "red",
    },
  },
};

function App() {
  const [value, setValue] = useState(false);
  const [themeConfig, setThemeConfig] = useState(config);

  const onHandleSubmit = () => {
    const selectedConfig = value ? config : config2;
    setThemeConfig(selectedConfig);
    setValue(!value);
  };

  const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  return (
    <ConfigProvider theme={themeConfig}>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://www.expedey.com/logo/expedeylogo.svg"
              alt="logo"
              style={{ marginRight: "20px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Switch onChange={onHandleSubmit} />
          </div>
        </Header>
        <Content>
          <Layout>
            <Sider style={{ background: "#132F55" }} width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
                items={items1}
              />
            </Sider>
            <Content style={{ padding: "0 24px", height: "100vh" }}>
              <TableCom />
            </Content>
          </Layout>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
