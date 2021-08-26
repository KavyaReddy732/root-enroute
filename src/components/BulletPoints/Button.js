import React from 'react';
import styled from 'styled-components';

export default function Button({ buttonName, onClick, type }) {
    return (
        <>
            <ButtonStyle type={type} onClick={onClick}>
                {buttonName}
            </ButtonStyle>
        </>
    )
}

const ButtonStyle = styled.button`
  margin-top:30px;
  background-color:black;
  color:white; 
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  padding: 9px 30px;
  width: max-content;
`;
