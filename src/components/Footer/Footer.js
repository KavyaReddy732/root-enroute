import React from 'react';
import { FaLinkedinIn, FaPhoneAlt,FaFacebookF,FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterMenu>
        <Footermain>
            <Contact>
                <ListItems> <FaPhoneAlt />+91 6309-630104 </ListItems>
                <ListItems> <HiOutlineMail/>  Info@root-enroute.com </ListItems>
            </Contact><br/>
            <Contact>
                <ListItems>{'Follow Us'}</ListItems>
                <ListItems><Anchor href="https://www.linkedin.com/company/root-enroute" about="_blank"><FaLinkedinIn/></Anchor></ListItems>
            </Contact>
        </Footermain>
            <Text>{'RootEnRoute AgriDigital Private Limited'}</Text>
            </FooterMenu>
    )
}

const FooterMenu = styled.div`
    margin-top:14rem;
    margin-bottom:-1rem;
    background: rgb(6, 121, 82);
`;

const Footermain = styled.div`
    color: white;
    display : flex;
    gap: 20%;
    font-size : 1.2rem;
    z-index : 10;
    align-items: center;
    justify-content: center;
    border-top: 3px solid black;

@media screen and (max-width: 960px){
    display:grid;
    grid-templete-columns:1fr;
    grid-templete-rows:repeat(4,1fr)
    transition: 0.8s all ease;
`;

const Contact = styled.ul`
list-style:none;
justify-self:flex-start;
}
`;

const ListItems = styled.li`
color: white;
justify-content:center;
margin-right:20px
`;

const Anchor = styled.a`
display:block;
`;

const Text = styled.p`
text-align:center;
margin-top:-1rem;
color:white;
`;
