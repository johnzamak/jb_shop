import React, { Component } from 'react';
import '../../style/Header.css'
import { Container, Row, Col, NavbarToggler, NavbarBrand, Collapse, Navbar, Nav, NavItem, NavLink, DropdownToggle, UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap'
import * as MdIcon from 'react-icons/lib/md'
import { ScaleLoader } from 'react-spinners'
import { loadState } from '../../localStorage';
import { connect } from 'react-redux'
var $ = require('jquery')

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxMenu: "boxMenu",
            listMenu: "listMenu",
            isToggle: false,
            reportMenu: "reportMenu",
            reportToggle: false,
            isOpen: false,
            isLoading: false
        }
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    onClickReport = () => {
        this.setState(prevState => ({
            reportToggle: !prevState.reportToggle
        }), () => {
            if (this.state.reportToggle) {
                $(".reportMenu").fadeIn("fast");
                $("#rp_arrow_right").hide();
                $("#rp_arrow_down").show();
            } else {
                $(".reportMenu").fadeOut("fast");
                $("#rp_arrow_right").show();
                $("#rp_arrow_down").hide();
            }
        })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ isLoading: nextProps.isLoader })
    }
    componentWillMount() {
        var check_login = loadState("admindata")
        // if (typeof check_login == "undefined") {
        //     alert("กรุณา Login เข้าสู่ระบบก่อน")
        //     window.location.href = "/Login"
        // } else {
        //     this.setState({
        //         admin_name: loadState("admindata")[0].admin_name
        //     })
        // }
    }
    render() {
        return (
            <div className="boxHeader">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/" className="logo_header"></NavbarBrand>
                    <ScaleLoader
                        sizeUnit={"px"}
                        size={10}
                        color={"#007bff"}
                        loading={this.state.isLoading} />
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/add_product">เพิ่มสินค้า</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/sell_product">ขายสินค้า</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>Page Selected</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Page 1</DropdownItem>
                                    <DropdownItem>Page 2</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div >
        );
    }
}
function mapStateToProps(state) {
    return state.loader
}
export default connect(mapStateToProps)(Header);