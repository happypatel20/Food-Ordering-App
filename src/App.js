import React, { Fragment, Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestroContainer from "./components/RestroContainer";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartPage from "./components/CartPage";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState()
useEffect(() => {
// auth code for login data
const info ={
  name: "Zeel"
}
setUserInfo(info.name)
},[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
      <div className="app">
      {/* <UserContext.Provider value={{loggedInUser: "Overrided"}}> */}
        <Header />
      {/* </UserContext.Provider> */}
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RestroContainer />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}> <Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestroMenu />
      },
      {
        path: "/cart",
        element: <CartPage />
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
