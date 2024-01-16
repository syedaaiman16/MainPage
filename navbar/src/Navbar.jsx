import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>

      <Navbar className="bg-sidebar-color" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand-bold">
            {/* <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
            Code Craft
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;