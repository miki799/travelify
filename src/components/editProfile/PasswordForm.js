import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import StatusMessage from "../trinkets/StatusMessage";
import FormInput from "../trinkets/FormInput";
import Submit from "../trinkets/Submit";
import Cancel from "../trinkets/Cancel";

const PasswordForm = () => {
    /*
    const [ actualPassword, setActualPassword ] = useState("");
    const [ newPassword, setNewPassword ] = useState("");
    const [ repeatedPassword, setRepeatedPassword ] = useState("");
    */

    const validate = (values) => {

        const errors = {};

        if (!values.actualPassword) {
            errors.actualPassword = "Wymagane!";
        } else if ( values.actualPassword !== "Haslo") {
            errors.actualPassword = "Hasło jest nieprawidłowe!";
        }

        if (!values.newPassword) {
            errors.newPassword = "Wymagane!";
        } else if ( values.newPassword === values.actualPassword ) {
            errors.newPassword = "Nowe hasło nie może być takie samo jak stare!"
        } else if ( !(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([a-zA-Z0-9!@#$%^&*]{8,})$/).test(values.newPassword) ) {
            errors.newPassword = "Hasło powinno składać się z minimum 8 znaków (1 cyfra, 1 duża litera oraz 1 znak specjalny)!"
        }

        if (!values.repeatPassword) {
            errors.repeatPassword = "Wymagane!"
        }

        if ( values.newPassword !== values.repeatPassword ) {
            errors.repeatPassword = "Podane hasło nie jest takie samo!";
        } 

        // czy newPassword i repeatPassword są takie same?

        return errors;

    }

    const formik = useFormik({
        initialValues: {
            actualPassword: "",
            newPassword: "",
            repeatPassword: "",
        },
        validate,
        onSubmit: (values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            actions.resetForm();
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Container>
                <Label htmlFor="actualPassword">
                    Bieżące hasło
                    <FormInput 
                        name="actualPassword" 
                        id="actualPassword" 
                        type="password" 
                        value={formik.values.actualPassword} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        minLength={8}
                        maxLength={30}
                    />
                </Label>
                { formik.touched.actualPassword && formik.errors.actualPassword ? <ErrorMessage type="error">{formik.errors.actualPassword}</ErrorMessage> : <div/>}
                <Label>
                    Wprowadź nowe hasło
                    <FormInput
                        disabled={formik.errors.actualPassword} 
                        name="newPassword" 
                        id="newPassword" 
                        type="password" 
                        value={formik.values.newPassword} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        minLength={8}
                        maxLength={30}
                    />
                </Label>
                { formik.touched.newPassword && formik.errors.newPassword ? <ErrorMessage type="error">{formik.errors.newPassword}</ErrorMessage> : <div/>}
                <Label>
                    Wprowadź ponownie nowe hasło
                    <FormInput
                        disabled={formik.errors.actualPassword || formik.errors.newPassword}  
                        name="repeatPassword" 
                        id="repeatPassword" 
                        type="password" 
                        value={formik.values.repeatPassword} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        maxLength={30}
                    />
                </Label> 
                { formik.touched.repeatPassword && formik.errors.repeatPassword ? <ErrorMessage type="error">{formik.errors.repeatPassword}</ErrorMessage> : <div/>}
            </Container>
            <Buttons>
                <Submit type="submit" disabled={formik.isSubmitting || !formik.dirty} >Zapisz</Submit>
                <Cancel disabled={formik.isSubmitting || !formik.dirty} onClick={formik.handleReset}>Anuluj</Cancel>
            </Buttons>
        </form>
    );

}

const Container = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: repeat(3, auto);
    grid-column-gap: 30px;
    grid-row-gap: 15px;
    margin: 20px 75px 0 75px;
    @media only screen and (max-width: 1220px) {
        margin: 20px 0 0 65px;
    }
    @media only screen and (max-width: 870px) {
        grid-column-gap: 20px;
        margin: 20px 0 0 55px;
        grid-template-columns: 250px 1fr;
    }
    @media only screen and (max-width: 560px) {
        margin: 15px 0 0 15px;
    }
    @media only screen and (max-width: 480px) {
        grid-template-columns: 200px 1fr;
    }
`;

const Label = styled.label`
    font-size: 18px;
    font-weight: ${({theme}) => theme.fontWeight.bold};
    color: ${({theme}) => theme.color.greyFont};
    @media only screen and (max-width: 870px) {
        font-size: 12px;
    }
    @media only screen and (max-width: 560px) {
        font-size: 10px;
    }
`;

const ErrorMessage = styled(StatusMessage)`
    justify-self: flex-start;
    align-self: center;
    font-size: 12px;
    height: 15px;
    text-align: center;
    padding: 5px 10px;
    @media only screen and (max-width: 1220px) {
        font-size: 10px;
        height: 10px;
        padding: 5px;
        margin-bottom: 0px;
    }
    @media only screen and (max-width: 870px) {
        font-size: 8px;
        height: 8px;

    }
    @media only screen and (max-width: 560px) {
        font-size: 6px;
    }
`;

const Buttons = styled.div`
    display: flex;   
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 0px;
    @media only screen and (max-width: 670px) {
        margin-top: 10px;
    }
`;

export default PasswordForm;