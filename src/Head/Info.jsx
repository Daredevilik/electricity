import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { PRICE_BUTTONS, BADGES } from './constants';
import Badge from 'react-bootstrap/Badge';
import { getCurrentPriceData } from '../services/apiService';

function Info({activePrice, setActivePrice}) {

    const [currentPrice, setCurrentPrice] = useState(null);

    useEffect(() => {
        getCurrentPriceData().then(({ data }) => setCurrentPrice(data[0] && data[0].price))
      }, []);

    return (
        <>
            <Col>
                <div>The current price of electricity is</div>
                <Badge bg={BADGES[0].name}>{BADGES[0].id}</Badge>
            </Col>
            <Col>
                <ButtonGroup>
                    {PRICE_BUTTONS.map(({ name, id }) => (
                        <Button
                            key={id}
                            active={activePrice === id}
                            onClick={() => setActivePrice(id)}
                            variant="secondary">{name}</Button>
                    ))}
                </ButtonGroup>
            </Col>
            <Col className='text-end'>
                        <h2>{currentPrice !== null ? `${currentPrice}` : 'Loading...'}</h2>
                        <div>cent / killowat-hour</div>
            </Col>
        </>
    );
}

export default Info;