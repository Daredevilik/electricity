import Col from 'react-bootstrap/Col';
import logo from './logo.png';
import Button from 'react-bootstrap/Button';

function Logo({ handleOpenSideBar }) {

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