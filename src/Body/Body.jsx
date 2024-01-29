import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getPriceData } from '../services/apiService';
import { chartDataConvertor } from '../utils';


function Body() {

    const [priceData, setPriceData] = useState(null);

    useEffect(() => {
        getPriceData().then(({data}) => setPriceData(chartDataConvertor(data.ee)));
    }, []);

    return (<Row>
        <Col>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={priceData} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </Col>
    </Row>);
}

export default Body;