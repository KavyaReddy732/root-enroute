import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export default function MobileNav({isOpen, toggle}) {
    return (
        <MobileContainer isOpen={ isOpen } onClick={toggle}>
            <Icon isOpen={ isOpen} onClick={toggle}>
                <CloseIcon />
            </Icon>
            <MobileWrapper>
                <MobileMenu>
                    <MobileLink to='/'>Home</MobileLink>
                    <MobileLink to='/farmersignup'>SignUp for Farmer</MobileLink>
                    <MobileLink to='/consumersignup'>SignUp for Consumer</MobileLink>
                </MobileMenu>
            </MobileWrapper>
        </MobileContainer>
    )
}

const MobileContainer = styled.aside`
    position: fixed;
    width:100%;
    height:50%;
    background: rgb(124, 209, 181);
    display: grid;
    align-items:center;
    top:0;
    left:0;
    transition: 0.3 ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}
`;

const CloseIcon = styled(FaTimes)`
    color: black;
`;

const Icon = styled.div`
    position: absolute;
    top:1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline:none
`;

const MobileWrapper = styled.div`
    color:white;
`;

const MobileMenu = styled.ul`
    display: grid;
    grid-template-columns:1fr;
    grid-template-rows: repeat(3,70px);
    text-align: center;

    @media screen and (max-width: 480px){
     grid-template-rows: repeat(3,50px);   
    }
`;

const MobileLink = styled(RouterLink)`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: white;
    cursor: ponter;

    &:hover {
        color: black;
        transition: 0.2s ease-in-out;

    }
`;
