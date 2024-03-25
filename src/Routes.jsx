import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./Layout/MainLayOut";
import Home from "./Pages/Home";
import ListedBooks from "./Pages/ListedBooks";
import PagesToRead from "./Pages/PagesToRead";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children: [
        {
          path: '/',
          element:<Home/>,
        },
        {
            path:'/listedBooks',
            element:<ListedBooks/>
        },
        {
            path:'/pagesToRead',
            element:<PagesToRead/>
        }
      ],
    },
  ]);