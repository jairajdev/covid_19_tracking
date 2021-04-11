import React, { useState } from 'react';
import Container from "./style/Container";
import BlogWrapper from "./style/BlogWrapper";
import { formatNumberWithComma } from '../../utils/helpers'

const Global = ({ countryData }) => {

    const [filterCountry, setFilterCountry] = useState(countryData.sort(compare).slice(0, 15));

    const onSearch = (event) => {
        // event.preventDefault();
        let name = event.target.value;
        let filterCountry = countryData.filter(obj => obj.Country.includes(name));

        if (filterCountry.length) {
            setFilterCountry(filterCountry);
        } else {
            if (name) {
                setFilterCountry([])
            }
        }
        if (!name) {
            setFilterCountry(countryData.sort(compare).slice(0, 15));
        }
    }

    function compare(a, b) {

        let comparison = 0;
        if (a.TotalConfirmed < b.TotalConfirmed) {
            comparison = 1;
        } else if (a.TotalConfirmed > b.TotalConfirmed) {
            comparison = -1;
        }
        return comparison;;
    }

    return (
        <Container>
            <h2>Top 15 Worldwide Cases</h2>
            <input
                style={{ height: 20, padding: 10, borderRadius: 10 }}
                placeholder="Search by country"
                onChange={input => onSearch(input)}
            />
            <div>
                {filterCountry.map((data, index) => (
                    <BlogWrapper key={index}>
                        <div>
                            <h2>{data.Country} </h2>
                            <p style={{ color: '#4CAF50' }}>Total Confirmed   :   {formatNumberWithComma(data.TotalConfirmed)}</p>
                            <p style={{ color: '#2196F3' }}>Total Recovered    :   {formatNumberWithComma(data.TotalRecovered)}</p>
                            <p style={{ color: '#FF9800' }}>Total Deaths    :   {formatNumberWithComma(data.TotalDeaths)}</p>
                        </div>
                    </BlogWrapper>
                ))}
            </div>
        </Container>
    )
}

export default Global;