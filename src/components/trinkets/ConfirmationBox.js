import React, { useRef } from "react";
import styled from "styled-components";
import { useDetectOutsideClick } from "./outsideModalClick";

const ConfirmationBox = ({children, confirmation="Tak", refusal="Nie", display, confirm, refuse}) => {
    
    const ref = useRef(null);
    
    // passing reference to the pop=up confirmation and hook for setting it visible
    useDetectOutsideClick(ref, refuse)


    return (
        <Black>
            <Container className="blur" ref={ref} display={display}>
            <Text>
                <p>{children}</p>
            </Text>
            <Buttons>
                <Button onClick={() => {confirm(true); refuse(false);}}>
                    {confirmation}
                </Button>
                <Button onClick={() => {confirm(false); refuse(false)}}>
                    {refusal}
                </Button>
            </Buttons>
        </Container>
        </Black>
        
    )
    
};

const Black = styled.div`
    background-color: #000;
`;

const Container = styled.div`
    display: ${({display}) => display ? "flex" : "none"};
    flex-direction: column;
    position: fixed;
    background-color: ${({theme}) => theme.color.lightBackground};
    width: 300px;
    top: 50%;
    left: 34%;
    border: 10px solid ${({theme}) => theme.color.lightTurquise};
    padding: 15px 20px;
    font-weight: ${({theme}) => theme.fontWeight.bold};
    border-radius: 10px;
    
`;

const Text = styled.div`
    display: flex;
    color: #000;
    font-size: 24px;
    text-align: center;
`;

const Buttons = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
`;

const Button = styled.button`
    width: 100px;
    height: 50px;
    background-color: ${({theme}) => theme.color.lightTurquise};
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: ${({theme}) => theme.color.lightBackground};
    border-radius: 50px;
    font-weight: ${({theme}) => theme.fontWeight.bold};
`;


export default ConfirmationBox;