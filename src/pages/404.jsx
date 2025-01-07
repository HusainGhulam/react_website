import { NavLink, useNavigate, useRouteError } from "react-router-dom";
import "./404.css";
export const ErrorPage =()=>{
    const error = useRouteError();
    const cpage  =useNavigate();
    const handleGoBack = () =>{
        cpage(-1);
    }
    if(error.status=== 404){
      return(
        <div className="container">
      <div className="error-text">
        <h1>404</h1>
        <p>Oops! The page you are looking for cannot be found.</p>
        <NavLink to="/" className="home-link">Go Back to Home</NavLink>
        <button className="home-link"
         onClick={handleGoBack}>Go To Back</button>
      </div>
    </div>
      )
    }
    console.log(error);
    
   return <h1>404 page does not exit</h1>;
}