import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
// import { Link as RouterScroll } from 'react-scroll'

export const Nav = styled.nav`
background: rgb(124, 209, 181);
height: 80px;
display : flex;
justify-content : flex-end;
align-items : center;
font-size : 1.2rem;
position : sticky;
top : 0;
z-index : 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`;

export const NavigationBar = styled.div`
display : flex;
justify-content : flex-end;;
height : 70px;
z-index : 1;
width : 100%;
max-width : 1100px;
`;

export const MobileNavbar = styled.div`
display : none;

@media screen and (max-width: 768px){
    display: block;
    position:absolute;
    top: 0;
    right: 0;
    // transform: translate(-100%, 30%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: 22px;

@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavItems = styled.li`
height: 80px;
`;

export const NavLinks = styled(RouterLink)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
font-size: 1.2rem;
padding: 0 1.5rem;
height: 100%;
cursor: pointer;

&:hover {
    color:white;
}
`;