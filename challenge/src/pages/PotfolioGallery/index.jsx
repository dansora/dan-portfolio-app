import axios from "axios";
import { useState } from "react";

const PortfolioGallery = () => {
    const [responseData, setResponseData] = useState({
        isDataAvailable: false,
        results: [],
    });

    const getPotfolioData = () => {
        axios
         .get ()
         .then((res) => {
            console.log(res.status === 200);
            setResponseData(res.data);
        });
    };
};

