import {Button, Nav, Navbar, NavItem, NavLink} from "reactstrap";
import {useHistory} from "react-router-dom";
import "../styles/NavBar.css";

/*
*  Top navbar component
*
* */
const CustomNavbar = () => {
    const history = useHistory();

    const handleHomeClick = () => {
        history.push('/')
        window.location.reload();
    }

    const handleLogout = () => {
        localStorage.removeItem('token-login')
        localStorage.removeItem('token-data')
        history.push('/')
        window.location.reload();
    }

    return(
        <Navbar className="ml-auto"  light expand="md">
            <Nav className="ml-auto" navbar >
                <NavItem>
                    <NavLink>

                        <Button color="dark"
                                onClick={handleHomeClick}
                        >
                            Inicio
                        </Button>

                        <Button color="dark"
                                onClick={handleLogout}
                        >
                            Log Out
                        </Button>


                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>

    );
}

export default CustomNavbar;
