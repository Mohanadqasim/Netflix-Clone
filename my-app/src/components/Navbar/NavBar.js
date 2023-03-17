import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'

function NavBar() {

    return(
        <Navbar className='navbar'>
        <Container>
          <Navbar.Brand className='logo' href="/">Netflix</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='a' href="/">Home</Nav.Link>
            <Nav.Link className='a' href="/favorite_list">Favorite List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default NavBar