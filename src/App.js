import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import SwapStations from "./components/SwapStations";
import Team from "./components/Team";



const App=()=>{
        return(
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    }

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<App/>,
            children:[
                {
                    path:"/about",
                    element:<About />
                },
                {
                    path:"/",
                    element:<Body />
                },
                
                {
                    path:"/contact",
                    element:<Contact />
                },
                {
                    path:"/team",
                    element:<Team />
                },
                {
                    path:"/stations",
                    element:<SwapStations />
                }

            ]
        }
    ])

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(<RouterProvider router={appRouter} />);
