import React from 'react';
import FinalFontwopvt from '../../images/FinalFontwopvt.png'
import { Home, Image, Text } from './ImageStyle';

const Images = () => {
    return (
        <Home>
            <br/>
            <br/>
            <Image src={FinalFontwopvt} alt="root" type="img" />
            <Text>
                <h2>AboutUs:</h2>{
                'We are an Agri Fresh Supply Chain company. Building a tech driven supply chain for fresh green groceries.We want our farmers to get a better price than what they are getting today and end consumers to pay less than what they are paying today. Higher prices are a consequence of wastage. We strongly believe wastage can be minimised by using novel inventory management system.Our vision is to build most efficient supply chain company, providing better value proposition for farmers, businesses and consumers.'
            }
            </Text>
        </Home>
    )
}

export default Images
