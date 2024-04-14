import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Products",
    
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Help Desk",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "AI Chatbot",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "Proactive Support",
        path: "/",
        newTab: false,
      },
      {
        id: 44,
        title: "Platform",
        path: "/",
        newTab: false,
      },
     
    ],
  },
  {
    id: 2,
    title: "Resources",
    path: "/",
    newTab: false,
  },
  {
    id: 3,
    title: "Customers",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "Pricing",
    path: "/",
    newTab: false,
  },
 
];
export default menuData;
