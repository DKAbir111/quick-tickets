import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import SearchResult from "../pages/SearchResult";
import DashBoardPage from "../pages/DashBoardPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [{
      path: "/",
      element: <DashBoardPage />
    },
    {
      path: '/search-result',
      element: <SearchResult />
    }

    ]
  },
]);

export default router;