import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleButtonClick = () => {
        console.log('You search query is:', searchText);
    };

    return (<>
        <Button variant="primary" onClick={handleShow}>
            Search
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search form</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search text"
                        aria-label="Search text"
                        aria-describedby="basic-addon2"
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={handleButtonClick}>
                        Search
                    </Button>
                </InputGroup>
            </Offcanvas.Body>
        </Offcanvas>
    </>);
}

export default Search;