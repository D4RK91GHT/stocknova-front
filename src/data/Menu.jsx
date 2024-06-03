import { RiDashboardLine, RiBarChartFill } from "react-icons/ri";

const dashboardMenu = [
  {
    "label": "Dashboard",
    "link": "/dashboard",
    "icon": <RiDashboardLine className='me-1' />
  },
  {
    "label": "Stocks",
    "link": "/stocks",
    "icon": <RiBarChartFill className='me-1' />
  },
  {
    "label": "Back Test",
    "link": "/back-test",
    "icon": <RiBarChartFill className='me-1' />
  }
];


export { dashboardMenu };