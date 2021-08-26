import styled from 'styled-components';
import gold from '../../images/gold-gradient-background.png';

export const Home = styled.div`
width:100%;
`;

export const Image = styled.img`
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 450px;
@media screen and (max-width: 768px){
    height:200px;
}
`;
export const Text = styled.p`
    color: black;
    font-size:1.2rem;
    font-family: Adelle;
    margin:50px;
    padding:20px;
    border: 2px solid black;
    border-radius:25px;
    line-height: 2rem;
    background: linear-gradient(rgba(195, 240, 217,0.3), rgba(195, 240, 217,0.3)),url(${gold}) ;
    @media screen and (max-width: 768px){
    margin:0;
}
`;