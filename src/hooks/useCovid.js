import { useEffect, useState } from "react";
import axios from "axios";

const useCovid = () => {
    const [covidData, setCovidData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://api.covid19api.com/summary")
            .then(data => {
                // console.log(data.data.Date);
                setLoading(false);
                setCovidData(data.data);
            })
            .catch(err => console.error(err));
    }, []);

    return [
        loading,
        covidData,
    ];
}

export default useCovid;