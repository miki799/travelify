import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const MarkerInfo = ({name, surname, url, title, country}) => {

    const [redirect, setRedirect] = useState('no');

    // TODO specific album, not login and register screen
    if (redirect === "yes") {
        return <Redirect to={{pathname: '/auth'}}/>
    }

    return (
        <Container>
            <Picture src={url} alt="profilePhoto"/>
            <InnerContainer>
                <Header>{name + surname}</Header>
                <Name>{title}</Name>
                <Country>{country}</Country>
                <Link onClick={() => setRedirect('yes')}>Wyświetl album</Link>
            </InnerContainer>
        </Container>
    );

}

const Container = styled.div`
    display: grid;
    grid-template-columns: 153px 1fr;
    padding: 35px 25px;
    @media only screen and (max-width: 1020px) {
        padding: 0px; 
        grid-template-columns: 107px 1fr;
    }
`; 

const Picture = styled.img`
    width: 138px;
    height: 153px;
    border-radius: 30%;
  
    @media only screen and (max-width: 1020px) {
        width: 90%;
        height: 70%;
        margin: auto;
    }

`;

const InnerContainer = styled.div`
    height: 138px;
    font-weight: ${({theme}) => theme.fontWeight.bold};
    font-size: 28px;
    color: ${({theme}) => theme.color.darkTurquise};
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media only screen and (max-width: 1020px) {
        min-height: 90px;
        font-size: 16px;
        margin-top: 18px;
        margin-left: 15px;
    }
`;

const Header = styled.h2`
    font-size: 36px;
    color: ${({theme}) => theme.color.darkTurquise};
    margin-bottom: 5px;
    @media only screen and (max-width: 1020px) {
        font-size: 20px;
        margin-top: 5px;
        margin-bottom: 5px; 
    } 

`;

const Name = styled.p`
    font-size: 28px;
    @media only screen and (max-width: 1020px) {
        font-size: 16px; 
    }
`;

const Country = styled.p`
    font-size: 16px;
    @media only screen and (max-width: 1020px) {
        font-size: 12px; 
    }
`;

const Link = styled.a`
    display: block;
    margin-top: 18px;
    color: ${({theme}) => theme.color.lightTurquise};
    font-weight: ${({theme}) => theme.fontWeight.light};
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
    @media only screen and (max-width: 1020px) {
        font-size: 16px; 
        margin-top: 25px;
        margin-bottom: auto;
    }
`;

export default MarkerInfo;