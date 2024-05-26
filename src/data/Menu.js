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
    "label": "Sales Monitoring",
    "link": "/dashboard/sales",
    "icon": <RiBarChartFill className='me-1' />
  },
  {
    "label": "Website Analytics",
    "link": "/dashboard/analytics",
    "icon": <RiBarChartFill className='me-1' />
  }
];


export { dashboardMenu };