import axios from "axios";
import { useState } from "react";
import PortfolioGallery from "../../components/PortfolioCards"

const PortfolioGallery = () => {
    const [responseData, setResponseData] = useState({
        isDataAvailable: false,
        results: [],
    });

    const getPotfolioData = () => {
        axios
         .get (`https://random-data-api.com/api/restaurant/random_restaurant?size=6`)
         .then((res) => {
            console.log(res.status === 200);
            setResponseData({
                isDataAvailable: res.status === 200,
                results: res.data,
            });
        });
    };


return(
    <div>
        <div>
            Search For Projects
        </div>
        {/* conditionally rendering the search button */}
        {!responseData.isDataAvailable && (
            <button onClick={getPortfolioData}>Search</button>
        )}

        {/* conditionally rendering the Portfolio Cards */}
        {responseData.isDataAvailable && (
            <div>
                {responseData.results.map((restaurant) => {
                    return (
                        <>
                        <PortfolioCard
                        key={restaurant.id}
                        restName={restaurant.name}
                        restPhone={restaurant.phone_number}
                        restAddress={restaurant.address}
                        />
                        </>
                    );
                })}
            </div>
        )}    

    </div>
);
};

export default PortfolioGallery;

