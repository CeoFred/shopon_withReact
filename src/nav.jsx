import React, { Component } from 'react'
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,Button,Container,Row,Col
} from 'reactstrap';
class Navigation extends Component {
constructor(props) {
super(props);
this.toggle = this.toggle.bind(this);
this.state = {
isOpen: false,
};
}
toggle() {
this.setState({
isOpen: !this.state.isOpen
});
}


render() {
return (
<div>
<Navbar  light expand="md" fixed-top style={{backgroundColor:'lightblue'}}>
<NavbarBrand href="/" style={{ color: 'white', fontSize: 30 }}>shopon</NavbarBrand>
<NavbarToggler onClick={this.toggle} />
<Collapse isOpen={this.state.isOpen} navbar>
<Nav className="ml-auto" navbar>
<NavItem>
<NavLink href="/components/" style={{ color: 'white' }}>New user?</NavLink>
</NavItem>
<NavItem>
<NavLink href="" style={{ color: 'white' }}>Login</NavLink>
</NavItem>
<UncontrolledDropdown nav inNavbar>
<DropdownToggle nav caret style={{ color: 'white' }}>
Cart({this.props.cart})
</DropdownToggle>
<DropdownMenu right style={{width:300}}>
{this.props.item}
    <Button className='btn btn-info' onClick={this.props.btnClick}
     state={this.props.btnState}>Checkout</Button>
</DropdownMenu>
</UncontrolledDropdown>
</Nav>
</Collapse>
</Navbar>

</div>
);
}
}

export default Navigation;
