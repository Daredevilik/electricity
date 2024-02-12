import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { INTERVALS } from './constants';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveHour } from '../services/stateService';

function Intervals() {
    const dispatch = useDispatch();
    const activeHour = useSelector((state) => state.main.activeHour);
    return (
        <Row>
            <Col>
                <Stack direction="horizontal" gap={3} className='justify-content-center'>
                    {INTERVALS.map(({ id, name }) => (
                        <Button
                            key={id}
                            active={(activeHour || 1) === id}
                            onClick={() => dispatch(setActiveHour(id))}
                            variant='outline-warning'>{name}
                        </Button>
                    ))}
                </Stack>
            </Col>
        </Row>
    );
}

export default Intervals;