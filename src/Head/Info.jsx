import { useEffect, useState, useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { PRICE_BUTTONS, BADGES } from './constants';
import Badge from 'react-bootstrap/Badge';
import { getCurrentPrice } from '../services/apiService';
import { mwToKw, addTax } from '../utils/priceFormats';
import { ERROR_MESSAGE } from './constants';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePrice, setErrorMessage } from '../services/stateService';
import { ElecticPriceContext } from '../contexts/ElectricPriceContext';

function Info() {
    const dispatch = useDispatch();

    const { values } = useContext(ElecticPriceContext);
    console.log('values.averagePrice', values.averagePrice);

    const [currentPrice, setCurrectPrice] = useState(0);
    const activePrice = useSelector((state) => state.main.activePrice);

    useEffect(() => {
        (async () => {
            try {
                const { data, success } = await getCurrentPrice();

                if (!success) throw new Error();

                setCurrectPrice(addTax(mwToKw(data[0].price), "ee"));
            } catch {
                dispatch(setErrorMessage(ERROR_MESSAGE));
            }
        })();
    }, [dispatch]);

    const badgeIndex = currentPrice > 10 ? 1 : 0;

    return (
        <>
            <Col>
                <div>The current price of electricity is</div>
                <Badge bg={BADGES[badgeIndex].name}>{BADGES[badgeIndex].id}</Badge>
            </Col>
            <Col>
                <ButtonGroup>
                    {PRICE_BUTTONS.map(({ name, id }) => (
                        <Button
                            key={id}
                            active={activePrice === id}
                            onClick={() => dispatch(setActivePrice(id))}
                            variant="secondary">{name}</Button>
                    ))}
                </ButtonGroup>
            </Col>
            <Col className='text-end'>
                <h2>{currentPrice}</h2>
                <div>cent / killowat-hour</div>
            </Col>
        </>
    );
}

export default Info;