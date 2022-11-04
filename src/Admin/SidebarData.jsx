import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";



export const SidebarData=[
    {
        title: "Home",
        path: "../home",
        icon: <FaIcons.FaHome />,
      },
      {
        title: "Dashboard",
        path: "/mainPage/dashboard",
        icon: <MdIcons.MdDashboard />,
      },
   
      {
        title: "Bookings",
        path: "/mainPage/bookings",
        icon: <FcIcons.FcDepartment />,
      },
      {
        title: "Buses",
        path: "/mainPage/buses",
        icon: <MdIcons.MdCategory />,
      },
      {
        title: "Drivers",
        path: "/mainPage/drivers",
        icon: <AiIcons.AiOutlineBars />,
      },
      {
        title: "Customers",
        path: "/mainPage/customers",
        icon: <FaIcons.FaUsers />,
      }
      // {
      //   title: "Routes",
      //   path: "/mainPageroutes",
      //   icon: <MdIcons.MdRequestPage />,
      // },
      // {
      //   title: "Logout",
      //   path: "/mainPage/logout",
      //   icon: <MdIcons. MdLogout />,
      // },
]









