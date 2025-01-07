import { useLoaderData } from "react-router-dom";
import { Cards } from "../components/UI/Cards";
import  "../components/UI/Cards.css";

export const Services = () => {
  // Fetch the API data using useLoaderData
  const getApiData = useLoaderData();

  // Log the fetched data to check its structure
  //console.log("API Data: ", getApiData);

  return (
    <>
      <ul className=" container grid grid-four--col">
        {getApiData && getApiData.Search && Array.isArray(getApiData.Search) && getApiData.Search.length > 0 ? (
          getApiData.Search.map((curElement) => (
            <Cards key={curElement.imdbID} curElement={curElement} />
          ))
        ) : (
          <p>No data available</p> // Fallback message if no data is present
        )}
      </ul>
    </>
  );
};
