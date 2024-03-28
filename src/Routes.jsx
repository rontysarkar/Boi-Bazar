import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./Layout/MainLayOut";
import Home from "./Pages/Home";
import ListedBooks from "./Pages/ListedBooks";
import PagesToRead from "./Pages/PagesToRead";
import BookDetails from "./components/BookDetails";
import Error from "./components/Error";
import ReadBooks from "./components/ReadBooks";
import WishList from "./components/WishList";
import LatestBook from "./Pages/LatestBook";
import AboutUs from "./Pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/listedBooks',
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBooks />,
          },
          {
            path:'wishlist',
            element:<WishList/>
          }
        ]
      },
      {
        path: '/pagesToRead',
        element: <PagesToRead />
      },
      {
        path: '/bookDetails/:id',
        element: <BookDetails />,
        loader: () => fetch('/Books.json')
      },
      {
        path:'/latestBook',
        element:<LatestBook/>,
        loader: () => fetch('/LatestBook.json')
      },
      {
        path:'/aboutUs',
        element:<AboutUs/>
      }
    ],
  },
]);