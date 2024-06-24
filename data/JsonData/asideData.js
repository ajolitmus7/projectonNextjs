import LockIcon from "@mui/icons-material/Lock";
import HomeIcon from "@mui/icons-material/Home";
import LaptopIcon from "@mui/icons-material/Laptop";
import home from "../../Image/sidebaricon/Home.png";
import { FaHome } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";

export const dataSet = [
  {
    id: 1,
    title: "Home",
    path: "/",
    submenu: false,
    icon: <FaHome />,
  },
  {
    id: 2,
    title: "IT Support",
    icon: <FaLaptop />,
    submenu: true,
    submenuitems: [
      {
        id: 1,
        title: "My tickets",
        path: "/tickets",
        submenu: false,
      },
      {
        id: 2,
        title: "Help",
        path: "",
        submenu: false,
      },
    ],
  },
  {
    id: 3,
    title: "Access Management",
    icon: <IoLockClosedSharp />,
    path: "",
    submenu: true,
    submenuitems: [
      {
        id: 1,
        title: "Access Mangement",
        path: "/access-management",
      },
      {
        id: 2,
        title: "Help",
        path: "",
      },
    ],
  },
];
