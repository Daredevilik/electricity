import Col from 'react-bootstrap/Col';
import logo from './logo.png';
import Search from './Search';

function Logo() {

    

    return (
        <Col><img src={logo} alt="" height="40px" width="200px" /> <Search />
        </Col >
    );
}

export default Logo;