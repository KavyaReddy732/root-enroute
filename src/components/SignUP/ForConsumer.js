import React from 'react'
import styled from 'styled-components';
import basket  from '../../images/basket.PNG';

export default function ForConsumer() {
    return (
        <FullImg>
            <RandomText>
                COMING SOON  
            </RandomText>
        </FullImg>
    )
}

const FullImg = styled.div`
background: linear-gradient(rgba(195, 240, 217,0.5), rgba(195, 240, 217,0.5)),url(${basket}) ;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height:625px;
`;


const RandomText = styled.h1`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-family: Brush Script MT, Brush Script Std, cursive;
font-size:4rem;
color:linear-gradient(to-right,white, rgb(65, 8, 102))
// color:rgb(65, 8, 102);
`;