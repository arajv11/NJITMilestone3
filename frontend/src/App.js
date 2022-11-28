import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import EnrollmentPage from './pages/EnrollmentPage';
import LogInPage from './pages/LogInPage';
import CartPage from './pages/CartPage';
import ShippingAddressPage from './pages/ShippingAddressPage';
import PlaceOrderPage from './pages/PlaceOrderPage';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const logOutHandler = () => {
    ctxDispatch({ type: 'CUSTOMER_LOG_OUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="warning">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>CatchWatch</Navbar.Brand>
              </LinkContainer>
              <Link to="/cart" className="nav-link">
                Cart{' '}
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="dark" className="badge">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
              <Link to="/allOrders" className="nav-link">
                My orders
              </Link>
              {userInfo ? (
                <NavDropdown
                  title={userInfo.name}
                  id="basic-nav-dropdown"
                  align="end"
                >
                  <Link
                    className="dropdown-item"
                    to="#logout"
                    onClick={logOutHandler}
                  >
                    Log Out
                  </Link>
                </NavDropdown>
              ) : (
                <Link className="nav-link" to="/login">
                  Log In
                </Link>
              )}
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="item/:slug" element={<ItemPage />} />
              <Route path="/login" element={<LogInPage />} />
              <Route path="/enroll" element={<EnrollmentPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/shipping" element={<ShippingAddressPage />} />
              <Route path="/placeorder" element={<PlaceOrderPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
