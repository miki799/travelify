import React from "react";
import styled from "styled-components";
import Select, { components } from "react-select";

/*
    Dropdown search is used at AlbumsPage and NewsPage.
*/

const { Option } = components; 

const CustomSelectOption = props => (
    <Option {...props}>
        <ValueContainer>
            <Album src={props.data.mainPhoto}/>
            <InnerContainer>
                <MobileContainer>
                    <Title>{props.data.title}</Title>
                    <Place>{props.data.place}</Place>
                </MobileContainer>
                {
                    props.data.profilePhoto &&
                    <User>
                        <Profile src={props.data.profilePhoto}/>
                        <Name>{props.data.value}</Name>
                    </User>
                } 
            </InnerContainer>
        </ValueContainer>
    </Option>
)
  
const CustomSelectValue = props => (
    <ValueContainer>
            <Album src={props.data.mainPhoto}/>
            <InnerContainer>
                <MobileContainer>
                    <Title>{props.data.title}</Title>
                    <Place>{props.data.place}</Place>
                </MobileContainer>
                <User>
                    <Profile src={props.data.profilePhoto}/>
                    <Name>{props.data.value}</Name>
                </User>
            </InnerContainer>
    </ValueContainer>
)
  
const CustomTheme = (theme) => {
    return {
        ...theme,
        colors: {
            ...theme.colors,
            primary25: "rgba(18, 191, 206, 0.4)",
            background: "#E0E5E0",
        },
        borderRadius: 5,
    }
}

const CustomStyles = {
    menu: (provided) => ({
        ...provided,
        background: "#E0E5E0",
    }),
    control: (provided) => ({
        ...provided,
        background: "#E0E5E0",
        border: "1px solid #0FA3B1",
        "&:hover": {
            border: "1px solid #0FA3B1",
        },
        "&:focus": {
            border: "1px solid #0FA3B1",
        }
    }),
    menuList: (provided) => ({
        ...provided,
       "::-webkit-scrollbar": {
            width: "10px",
       },
       "::-webkit-scrollbar-track": {
            background: "#E0E5E0",
       },
       "::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "25px",
       },
       "::-webkit-scrollbar-thumb:hover": {
            background: "#555"
       },
       borderRadius: 4,
       border: "1px solid #0FA3B1",
        "&:hover": {
            border: "1px solid #0FA3B1",
        },
        "&:focus": {
            border: "1px solid #0FA3B1",
        }
    })
};

const DropdownSearch = ({options, onChange, onBlur, value}) => {
    
    return (
        <StyledSelect
            styles={CustomStyles}
            theme={CustomTheme} 
            options={options} 
            isSearchable 
            isClearable
            placeholder="Szukaj..."
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            components={{ Option: CustomSelectOption, SingleValue: CustomSelectValue }}
        />
    );
    
};

const StyledSelect = styled(Select)`
    min-width: 50%;
    max-width: 50%;
    margin: 30px auto 0 auto;
    font-size: 16px;
`;

const Album = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 5px;
    @media only screen and (max-width: 1110px) {
        width: 100px;
        height: 100px;
    }
    @media only screen and (max-width: 905px) {
        width: 80px;
        height: 80px;
    }
    @media only screen and (max-width: 760px) {
        width: 50px;
        height: 50px;
    }
    @media only screen and (max-width: 560px) {
       display: none;
    }
`;

const ValueContainer = styled.div`
    display: flex;
    padding-right: 5px;
    flex-direction: row;
    align-items: center;

`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 5px;
    @media only screen and (max-width: 1110px) {
        font-size: 18px;
    }
    @media only screen and (max-width: 905px) {
        font-size: 12px;
    }
    @media only screen and (max-width: 760px) {
       margin-bottom: 0px;
    }
    @media only screen and (max-width: 435px) {
       font-size: 8px;
    }
`;

const Place = styled.h3`
    font-size: 18px;
    margin-bottom: 5px;
    @media only screen and (max-width: 1110px) {
        font-size: 12px;
    }
    @media only screen and (max-width: 905px) {
        font-size: 10px;
    }
    @media only screen and (max-width: 760px) {
       margin-bottom: 0px;
    }
    @media only screen and (max-width: 435px) {
       font-size: 6px;
    }
`;

const User = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media only screen and (max-width: 435px) {
        align-items: none;
    }
`;


const Profile = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
    @media only screen and (max-width: 1110px) {
        width: 40px;
        height: 40px;
    }
    @media only screen and (max-width: 905px) {
        width: 30px;
        height: 30px;
    }
    @media only screen and (max-width: 760px) {
       width: 15px;
       height: 15px;
       margin-right: 5px;
    }
    @media only screen and (max-width: 435px) {
        display: none;
        margin-right: 0px;
    }
`;


const Name = styled.p`
    font-size: 18px;
    @media only screen and (max-width: 1110px) {
        font-size: 12px;
    }
    @media only screen and (max-width: 905px) {
        font-size: 10px;
    }
    @media only screen and (max-width: 435px) {
        font-size: 8px;
    }
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    @media only screen and (max-width: 905px) {
        margin-left: 10px;
    }
    @media only screen and (max-width: 435px) {
       display: block;
    }
`;

const MobileContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default DropdownSearch;