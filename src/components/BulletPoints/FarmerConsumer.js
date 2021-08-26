import React from 'react';
import  Button  from './Button';
import { FarmerText, FarmerPoints, ConsumerPoints, Heading, Li, Buttons } from './FarmerConsumerStyle';
import { useHistory } from 'react-router-dom';

export default function FarmerConsumer() {

    let history = useHistory();
    const redirectFarmer = () => {
        history.push('/farmersignup');
    };

    const redirectConsumer = () => {
        history.push('/consumersignup');
    };


    return (
        <>
            <FarmerText>
                <div>
                <FarmerPoints>
                    <Heading>For Farmer</Heading>
                    <Li>Create your plan of harvest to reduce wastage</Li>
                    <Li>supply chain is on us</Li>
                    <Li>Seller Identity</Li>
                    <Li>Pricing based on quality for selected quantity</Li>
                    <Li>Demand forecasting</Li>
                    <Li>single point for sale</Li>
                    {/* <Button buttonName="SignUp for Farmer" onClick={ClickHandler} style /> */}
                    {/* <Button buttonName="SignUp for Farmer" onClick={ClickHandler} style /> */}
                </FarmerPoints>
                    <Buttons><Button buttonName="SignUp for Farmer" onClick={redirectFarmer} style /></Buttons>
                </div>
                <div>
                <ConsumerPoints>
                    <Heading>For Consumer</Heading>
                    <Li>Regular supply</Li>
                    <Li>control on quality</Li>
                    <Li>wastage control plan</Li>
                    <Li>competitive pricing</Li>
                    <Li>Directly from farm</Li>
                    <Li>Doorstep delivery</Li>
                    {/* <Buttons><Button buttonName="SignUp for Consumer" /></Buttons> */}
                </ConsumerPoints>
                <Buttons>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button buttonName="SignUp for Consumer" onClick={redirectConsumer}/></Buttons>
                    {/* <Button buttonName="SignUp for Consumer" /> */}
                    </div>
                </FarmerText>
        </>
    )
}
