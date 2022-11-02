


import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
// import * as CgIcons from "react-icons/cg";
// import {BiBus} from "react-icons/tfi";



export const SidebarData=[
    {
        title: "Home",
        path: "../home",
        icon: <FaIcons.FaHome />,
      },
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdIcons.MdDashboard />,
      },
   
      {
        title: "Bookings",
        path: "/bookings",
        icon: <FcIcons.FcDepartment />,
      },
      {
        title: "Buses",
        path: "/buses",
        icon: <MdIcons.MdCategory />,
      },
      {
        title: "Drivers",
        path: "/drivers",
        icon: <AiIcons.AiOutlineBars />,
      },
      {
        title: "Customers",
        path: "/customers",
        icon: <FaIcons.FaUsers />,
      },
      {
        title: "Routes",
        path: "/routes",
        icon: <MdIcons.MdRequestPage />,
      },
      // {
      //   title: "Profile",
      //   path: "/profile",
      //   icon: <CgIcons.CgProfile />,
      // },
      {
        title: "Logout",
        path: "/logout",
        icon: <MdIcons. MdLogout />,
      },
]









