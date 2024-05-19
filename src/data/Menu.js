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

const uiElementsMenu = [
  {
    "label": "Getting Started",
    "icon": "ri-pencil-ruler-2-line",
    "submenu": [
      {
        "label": "Grid System",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Columns",
        "link": "/docs/layout/columns"
      },
      {
        "label": "Gutters",
        "link": "/docs/layout/gutters"
      }
    ]
  },
  {
    "label": "Components",
    "icon": "ri-suitcase-line",
    "submenu": [
      {
        "label": "Accordion",
        "link": "/docs/com/accordions"
      },
      {
        "label": "Alerts",
        "link": "/docs/com/alerts"
      },
      {
        "label": "Avatars",
        "link": "/docs/com/avatars"
      },
      {
        "label": "Badge",
        "link": "/docs/com/badge"
      },
      {
        "label": "Breadcrumbs",
        "link": "/docs/com/breadcrumbs"
      },
      {
        "label": "Buttons",
        "link": "/docs/com/buttons"
      },
      {
        "label": "Cards",
        "link": "/docs/com/cards"
      },
      {
        "label": "Carousel",
        "link": "/docs/com/carousel"
      },
      {
        "label": "Dropdown",
        "link": "/docs/com/dropdown"
      },
      {
        "label": "Images",
        "link": "/docs/com/images"
      },
      {
        "label": "List Group",
        "link": "/docs/com/listgroup"
      },
      {
        "label": "Markers",
        "link": "/docs/com/markers"
      },
      {
        "label": "Modal",
        "link": "/docs/com/modal"
      },
      {
        "label": "Nav & Tabs",
        "link": "/docs/com/navtabs"
      },
      {
        "label": "Offcanvas",
        "link": "/docs/com/offcanvas"
      },
      {
        "label": "Pagination",
        "link": "/docs/com/pagination"
      },
      {
        "label": "Placeholders",
        "link": "/docs/com/placeholders"
      },
      {
        "label": "Popovers",
        "link": "/docs/com/popovers"
      },
      {
        "label": "Progress",
        "link": "/docs/com/progress"
      },
      {
        "label": "Spinners",
        "link": "/docs/com/spinners"
      },
      {
        "label": "Toast",
        "link": "/docs/com/toasts"
      },
      {
        "label": "Tooltips",
        "link": "/docs/com/tooltips"
      },
      {
        "label": "Tables",
        "link": "/docs/com/tables"
      }
    ]
  },
  {
    "label": "Forms",
    "icon": "ri-list-check-2",
    "submenu": [
      {
        "label": "Text Elements",
        "link": "/docs/form/elements"
      },
      {
        "label": "Selects",
        "link": "/docs/form/selects"
      },
      {
        "label": "Checks & Radios",
        "link": "/docs/form/checksradios"
      },
      {
        "label": "Range",
        "link": "/docs/form/range"
      },
      {
        "label": "Pickers",
        "link": "/docs/form/pickers"
      },
      {
        "label": "Layouts",
        "link": "/docs/form/layouts"
      }
    ]
  },
  {
    "label": "Charts & Graphs",
    "icon": "ri-bar-chart-2-line",
    "submenu": [
      {
        "label": "ApexCharts",
        "link": "/docs/chart/apex"
      },
      {
        "label": "Chartjs",
        "link": "/docs/chart/chartjs"
      }
    ]
  },
  {
    "label": "Maps & Icons",
    "icon": "ri-stack-line",
    "submenu": [
      {
        "label": "Leaflet Maps",
        "link": "/docs/map/leaflet"
      },
      {
        "label": "Vector Maps",
        "link": "/docs/map/vector"
      },
      {
        "label": "Remixicon",
        "link": "/docs/icon/remix"
      },
      {
        "label": "Feathericons",
        "link": "/docs/icon/feather"
      }
    ]
  },
  {
    "label": "Utilities",
    "icon": "ri-briefcase-4-line",
    "submenu": [
      {
        "label": "Background",
        "link": "/docs/util/background"
      },
      {
        "label": "Border",
        "link": "/docs/util/border"
      },
      {
        "label": "Colors",
        "link": "/docs/util/colors"
      },
      {
        "label": "Divider",
        "link": "/docs/util/divider"
      },
      {
        "label": "Flex",
        "link": "/docs/util/flex"
      },
      {
        "label": "Sizing",
        "link": "/docs/util/sizing"
      },
      {
        "label": "Spacing",
        "link": "/docs/util/spacing"
      },
      {
        "label": "Opacity",
        "link": "/docs/util/opacity"
      },
      {
        "label": "Position",
        "link": "/docs/util/position"
      },
      {
        "label": "Typography",
        "link": "/docs/util/typography"
      },
      {
        "label": "Shadows",
        "link": "/docs/util/shadows"
      },
      {
        "label": "Extras",
        "link": "/docs/util/extras"
      }
    ]
  }
];

export { dashboardMenu, uiElementsMenu };