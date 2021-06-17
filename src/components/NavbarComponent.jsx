import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { resetLoginState } from "redux/actions/loginAction/actions";

function NavbarComponent() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const doLogout = () => {
    localStorage.removeItem("user");
    dispatch(resetLoginState());
    history.push("/login");
  };

  return (
    <div>
      <Navbar className="px-2" color="light" light expand="md">
        <NavbarBrand onClick={() => history.push("/dashboard")}>
          Dashboard
        </NavbarBrand>
        <h4>{}</h4>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink onClick={() => history.push("/dashboard/my-account")}>
                My Account
              </NavLink>
            </NavItem>
          </Nav>

          <Button color="danger" onClick={doLogout}>
            Logout
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
