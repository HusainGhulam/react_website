import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ErrorPage } from "./pages/404";
import { getApiData } from "./api/GetApiData";
import { Home } from "./pages/Home";
import { LoginFormReact } from "./pages/Login";
import { RegistrationFormReact } from "./pages/RegistrationFormReact";
import { GetServiceData } from "./components/UI/GetServiceData";
import { getApiDetailsData } from "./api/GetApiDetailsData";
import { contactData, ContactFormReact } from "./pages/ContactUs";

export const App = () => {
  const router = createBrowserRouter([
    // {
    //   path : "/",
    //   element : <Home/> ,
    // },
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
          loader : getApiData,
        },
        {
          path: "/services/:servicesID",
          element : <GetServiceData />,
          loader : getApiDetailsData,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/contactus",
          element: <ContactFormReact />,
          action : contactData,
        },
        {
          path: "/Login",
          element: <LoginFormReact />,
        },
        {
          path: "/RegistrationFormReact",
          element: <RegistrationFormReact />,
        },
      ],
      

    },
    
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //     <Route  path = "/" element = {<Home />} />
  //     <Route  path = "/about" element = {<About />} />
  //     <Route  path = "/services" element = {<Services />} />
  //     <Route  path = "/contact" element = {<Contact />} />
  //     </Route>

  //   )
  // );
  return <RouterProvider router={router} />;
};

export default App;
