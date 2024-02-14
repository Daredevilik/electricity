import Col from 'react-bootstrap/Col';
import logo from './logo.png';
import Button from 'react-bootstrap/Button';
import { setShowSideBar } from '../services/stateService';
import { useDispatch } from 'react-redux';

function Logo() {

    const dispatch = useDispatch();
    const handleOpenSideBar = () => {
        dispatch(setShowSideBar(true));
    };

    return (
        <>
            <Col><img src={logo} alt="" height="40px" width="200px" />
            </Col >
            <Col>
                <Button
                    variant="primary"
                    onClick={handleOpenSideBar}>
                    Search
                </Button>
            </Col>
        </>
    );
}

export default Logo;