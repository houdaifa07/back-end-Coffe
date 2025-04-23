import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testapi = () => {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/product_stocks')
            .then(response => {
                setStocks(response.data);
                setLoading(false);
                // document.write("Donne nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn ")
            })
            .catch(error => {
                console.error("There was an error fetching the dataaaa:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>stock : </h1>
            <ul>
                {stocks.map(ele => (
                    <>
                        <div>{ele.id}</div>
                        <div>{ele.title}</div>
                        <div>{ele.price}</div>
                        <div>{ele.quantity}</div>
                        <div>{ele.total_price}</div>
                        <div>{ele.image_src}</div>

                    </>

                ))}
            </ul>
        </div>
    );
};
export default Testapi;