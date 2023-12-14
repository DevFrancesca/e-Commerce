import './App.css'
import {createBrowserRouter ,RouterProvider,} from "react-router-dom";
import Home from './Pages/Home';
import Layout from './Pages/Layout';
// import Cart from './Pages/Cart';
import Detail from './Pages/Detail';
import Category from './Pages/Category';
import Cart1 from './Pages/Cart1';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/category",
        element: <Category/>,
      },
      {
        path: "/cart1",
        element: <Cart1/>,
      },
      {
        path: "/detail/:id",
        element: <Detail/>,
      },
    ]
  },
]);


const App = () => {

  return (
  <>
  <RouterProvider router={router} />
  </>
  )
}

export default App
