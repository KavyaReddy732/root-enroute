import React, {useState} from 'react';
import FinalFontwopvt from '../../images/FinalFontwopvt.png';
import { FaBars } from 'react-icons/fa';
import  Button  from '../BulletPoints/Button';
import {
    Nav,
    NavigationBar,
    NavRoute,
    MobileNavbar,
    NavMenu,
    NavItems,NavLinks
} from './NavStyledComponent';
import MobileNav from './MobileNav';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Nav>
                <NavigationBar>
                      <NavMenu>
                        <NavItems>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="/farmersignup"> SignUp for Farmer </NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="/consumersignup">SignUP For Consumer</NavLinks>
                        </NavItems> 
                    </NavMenu>
                    <MobileNavbar>
                        <FaBars style={{ padding: '20px' }} onClick={toggle} />
                         <MobileNav isOpen={isOpen} toggle={ toggle }/>
                    </MobileNavbar>
                </NavigationBar>
            </Nav>
        </>
    )
}

export default Navbar;
