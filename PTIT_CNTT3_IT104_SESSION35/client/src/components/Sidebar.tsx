// src/components/Sidebar.tsx

import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  LineChartOutlined,
  FileOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { toggleMenu } from "../store/silce/menuSlice";

export default function Sidebar() {
  const collapsed = useSelector((state: RootState) => state.menu.collapsed);
  const dispatch = useDispatch<AppDispatch>();

  const items = [
    { icon: <DashboardOutlined />, label: "Bảng điều khiển" },
    { icon: <UserOutlined />, label: "Tài khoản" },
    { icon: <DollarOutlined />, label: "Tài sản" },
    { icon: <LineChartOutlined />, label: "Thống kê" },
    { icon: <FileOutlined />, label: "Tài liệu" },
  ];

  return (
    <div
      style={{
        width: collapsed ? "60px" : "200px",

        background: "#001529",
        color: "#fff",
        height: "300px",
        transition: "width 0.3s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px",
            cursor: "pointer",
            gap: "10px",
          }}
        >
          {item.icon}
          {!collapsed && <span>{item.label}</span>}
        </div>
      ))}

      <div
        onClick={() => dispatch(toggleMenu())}
        style={{
          marginTop: "auto",
          padding: "12px",
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        {collapsed ? <RightOutlined /> : <LeftOutlined />}
      </div>
    </div>
  );
}
