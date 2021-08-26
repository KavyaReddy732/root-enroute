import styled from 'styled-components';
import cropimage from '../../images/cropimage.PNG';
import basket  from '../../images/basket.PNG';

export const FarmerText = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin:30px;
    gap:40px;
    justify-content:center;
    align-items:center;
    @media screen and (max-width: 768px){
        display:grid;
        grid-column-gap: 50px;
        margin-left:-10px;
    }
`;


export const Heading = styled.h2`
    text-align:center;
`;

export const FarmerPoints = styled.ul`
    display: block;
    margin-left: 100px;
    border:2px solid black;
    border-radius:25px;
    background: linear-gradient(rgba(195, 240, 217,0.7), rgba(195, 240, 217,0.7)),url(${cropimage}) ;
    width:500px;

    @media screen and (max-width: 768px){
        display:table;
        margin-left:0;
        width:100%;
        padding:20px;
    }
`;

export const Li = styled.li`
    font-family: Arial, Helvetica, sans-serif;
    line-height: 2.333em;
    list-style: inside;
    font-size:20px;
    font-weight:4px;
`;

export const ConsumerPoints = styled.ul`
    display: block;
    border:2px solid black;
    border-radius:25px;
    width:500px;
    background: linear-gradient(rgba(195, 240, 217,0.7), rgba(195, 240, 217,0.7)),url(${basket}) ;
    @media screen and (max-width: 768px){
        width:100%;
    }
`
export const Buttons = styled.div`
display:flex;
justify-content: center;
`;