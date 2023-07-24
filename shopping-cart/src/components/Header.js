import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FormControl, Nav, Dropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return <Navbar bg="dark" variant='dark' style={{height: 80}}>
    <Container>
        <Navbar.Brand>
            <Link to='/'>Shopping cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
            <FormControl style={{ width: 500 }} placeholder='Search a product or a brand'
            className='m-auto'
            />
        </Navbar.Text>
        <Nav>
            <Dropdown alignRight>
                <Dropdown.Toggle variant='success'>
                    <FaShoppingCart color="white" fontSize="25px" />
                    <Badge>{10}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: 370 }}>
                    <span style={{ padding: 10 }}>Cart is empty!</span>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
    </Container>
  </Navbar>
  
}

export default Header