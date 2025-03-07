import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import DashBoardPage from "../pages/DashBoardPage";
import SearchResultPage from "../pages/SearchResultPage";
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
      element: <SearchResultPage />
    }

    ]
  },
]);

export default router;