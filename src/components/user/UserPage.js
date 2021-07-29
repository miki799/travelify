import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import InfoSection from "./InfoSection";
import GridSection from "./GridSection";
import { FriendsListArray as albumData } from "./data";
import profileBackground from "./assets/profileBackground.png";
import profilePhoto from "./assets/profilePhoto.png"
import ButtonIcon from "../trinkets/ButtonIcon";
import editIcon from "./assets/editIcon.svg";
import friendsIcon from "./assets/friendsIcon.svg";
import addFriendIcon from "./assets/addFriendIcon.svg";


const types = {
    type: "logged",
    logged: "logged",
    friend: "friend",
    unknown: "unknown"
}

const sections = {
    info: "info",
    albums: "albums",
    friends: "friends",  
};

const infoData = {
    nationality: {
        id: 141,
        country: "Poland",
        url: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
    },
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis tincidunt risus, non tempor nunc mattis vel. Pellentesque tincidunt vestibulum elit, eget elementum dolor consectetur vitae. 
        Donec vestibulum, lorem vitae condimentum tristique, neque sem gravida risus, in vulputate sapien est ut sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis tincidunt risus, non tempor nunc mattis vel. 
        Pellentesque tincidunt vestibulum elit, eget elementum dolor consectetur vitae.`,
    interests: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis tincidunt risus, non tempor nunc mattis vel. Pellentesque tincidunt vestibulum elit, eget elementum dolor consectetur vitae. 
        Donec vestibulum, lorem vitae condimentum tristique, neque sem gravida risus, in vulputate sapien est ut sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis tincidunt risus, non tempor nunc mattis vel. 
        Pellentesque tincidunt vestibulum elit, eget elementum dolor consectetur vitae. Donec vestibulum, lorem vitae condimentum tristique, neque sem gravida risus, in vulputate sapien est ut sapien. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis tincidunt risus, non tempor nunc mattis vel. Pellentesque tincidunt vestibulum elit, eget elementum dolor consectetur vitae. 
        Donec vestibulum, lorem vitae condimentum tristique, neque sem gravida risus, in vulputate sapien est ut sapien.`,
    visitedCountries: [
        {
            id: 141,
            country: "Poland",
            url: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
        }, 
        {
            id: 184,
            country: "Ukraine",
            url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
        },
        {
            id: 46,
            country: "Czech Republic",
            url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
        },   
        {
            id: 159,
            country: "Slovakia",
            url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
        }, 
        {
            id: 65,
            country: "Germany",
            url: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
        },
        {
            id: 17,
            country: "Belarus",
            url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",
        },     
        {
            id: 102,
            country: "Lithuania",
            url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg",
        },   
        {
            id: 96,
            country: "Latvia",
            url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
        }
    ],
}

const UserPage = ({user, albums}) => {

    const [ infoActive, setInfoActive ] = useState(false);
    const [ albumsActive, setAlbumsActive ] = useState(true);
    const [ friendsActive, setFriendsActive ] = useState(false);
    
    // redirects to edit profile page
    const [ redirect, setRedirect ] = useState(false);

    const sectionsToggle = (sectionName) => {
        if (sectionName === sections.albums) {
            setAlbumsActive(true);
            setFriendsActive(false);
        } else if ( sectionName === sections.friends) {
            setAlbumsActive(false);
            setFriendsActive(true);
            setInfoActive(false);
        } else if ( sectionName === sections.info) {
            if ( friendsActive ) {
                setAlbumsActive(true);
                setFriendsActive(false);
                setInfoActive(true);
            } else {
                setInfoActive(!infoActive);
            }
        }
    };

    if (redirect) {
        return <Redirect to={{pathname: "/user/editProfile"}}/>
    }

    return (
        <>
            <Header>
                <Images>
                    <ProfileBackground src={profileBackground} alt="Profile background"/>
                    <ProfilePhoto src={profilePhoto} alt="Profile photo"/>
                </Images> 
                <Name>Jan Nowak</Name>
                <Line/>
                <Options>
                    <Button onClick={() => sectionsToggle(sections.info)}>Informacje o użytkowniku</Button>
                    <Button onClick={() => sectionsToggle(sections.albums)}>Albumy</Button>
                    <Button onClick={() => sectionsToggle(sections.friends)}>Znajomi</Button>
                    {
                        types.type === "logged" && <UserButton icon={editIcon} onClick={() => setRedirect(true)}>Edytuj profil</UserButton>
                    }
                    {
                        types.type === "friend" && <UserButton icon={friendsIcon}>Znajomi</UserButton>
                    }
                    {
                        types.type === "unknown" && <UserButton icon={addFriendIcon}>Dodaj</UserButton>
                    }
                </Options>
            </Header>
            <Container>
                {
                    infoActive && <InfoSection nationality={infoData.nationality} about={infoData.about} interests={infoData.interests} visitedCountries={infoData.visitedCountries}/>
                }
                {
                    albumsActive && <GridSection sectionType={sections.albums} data={albumData.list}/>
                }
                {
                    friendsActive && <GridSection sectionType={sections.friends} data={albumData.list}/>
                }
            </Container>
        </>
    );

};

const Header = styled.div`
    width: 100%;
    height: 410px;
    background-color: ${({theme}) => theme.color.lightBackground};
    margin-bottom: 15px;
    @media only screen and (max-width: 1080px) {
        height: 340px;
    }
    @media only screen and (max-width: 830px) {
        height: 270px;
    }
    @media only screen and (max-width: 735px) {
        height: 250px;
    }
    min-width: 360px;
`;

const Images = styled.div`
    position: relative;
`;

const ProfileBackground = styled.img`
    height: 250px;
    width: 1300px;
    display: block;
    margin: 0 auto;
    border-left: 2px solid ${({theme}) => theme.color.darkTurquise};
    border-right: 2px solid ${({theme}) => theme.color.darkTurquise};
    border-bottom: 2px solid ${({theme}) => theme.color.darkTurquise};
    @media only screen and (max-width: 1440px) {
        width: 950px;
    }
    @media only screen and (max-width: 1080px) {
        width: 700px;
        height: 200px;
    }
    @media only screen and (max-width: 830px) {
        width: 600px;
        height: 150px;
    }
    @media only screen and (max-width: 735px) {
        width: 550px;
    }
    @media only screen and (max-width: 560px) {
        width: 400px;
    }
    @media only screen and (max-width: 410px) {
        width: 350px;
    }
    min-width: 350px;
`;

const ProfilePhoto = styled.img`
    position: absolute;
    height: 208px;
    width: 208px;
    top: 62%;
    left: 50%;
    transform: translate(-50%, -50%); // (X, Y)
    @media only screen and (max-width: 1080px) {
        width: 150px;
        height: 150px;
        top: 67%;
    }
    @media only screen and (max-width: 830px) {
        width: 120px;
        height: 120px;
        top: 65%;
    }
    @media only screen and (max-width: 735px) {
        width: 90px;
        height: 90px;
        top: 73%;
    }
`;

const Name = styled.h1`
    margin-top: 20px;
    text-align: center;
    font-size: 40px;
    @media only screen and (max-width: 1080px) {
        font-size: 30px;
    }
    @media only screen and (max-width: 735px) {
        font-size: 25px;
        margin-top: 10px;
    }
`;

const Line = styled.div`
    border-top: 2px solid ${({theme}) => theme.color.darkTurquise};
    width: 1250px;
    margin: 0 auto;
    @media only screen and (max-width: 1440px) {
        width: 900px;
    }
    @media only screen and (max-width: 1080px) {
        width: 600px;
    }
    @media only screen and (max-width: 830px) {
        width: 550px
    }
    @media only screen and (max-width: 735px) {
        width: 500px;
    }
    @media only screen and (max-width: 560px) {
        width: 350px;
    }
    @media only screen and (max-width: 410px) {
        width: 300px;
    }
    min-width: 300px;
`;

const Options = styled.div`
    width: 1250px;
    margin: 0 auto;
    margin-top: 5px;
    display: grid;
    grid-template-columns: 250px repeat(2, 100px) 1fr;
    align-items: baseline;
    font-size: 18px;
    color: ${({theme}) => theme.color.greyFont};
    font-weight: ${({theme}) => theme.fontWeight.medium};
    @media only screen and (max-width: 1440px) {
        width: 900px;
    }
    @media only screen and (max-width: 1080px) {
        grid-template-columns: 180px repeat(2, 100px) 1fr;
        width: 600px;
        font-size: 14px;
    }
    @media only screen and (max-width: 830px) {
        width: 550px;
        grid-template-columns: 130px repeat(2, 80px) 1fr;
        font-size: 10px;
        margin-top: 2px;
    }
    @media only screen and (max-width: 735px) {
        width: 500px;
    }
    @media only screen and (max-width: 560px) {
        width: 350px;
        grid-template-columns: repeat(3, 50px) 1fr;
        font-size: 8px;
    }
    @media only screen and (max-width: 410px) {
        width: 300px;
    }
    min-width: 300px;
`;

const Button = styled.div`
    cursor: pointer;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    &:hover {
        background-color: rgba(18, 191, 206, 0.4);
        -webkit-transition: all 0.15s ease-in-out;
        -o-transition: all 0.15s ease-in-out;
        -moz-transition: all 0.15s ease-in-out;
        transition: all 0.15s ease-in-out;
    }
`;


const UserButton = styled(ButtonIcon)`
    width: 160px;
    height: 39px;
    border-radius: 5px;
    margin: 0;
    justify-self: end;
    color: ${({theme}) => theme.color.lightBackground};
    font-size: 18px;
    font-weight: ${({theme}) => theme.fontWeight.bold};
    padding-left: 25px;
    background-image: url(${({icon}) => icon});
    background-position: 8% 50%;
    background-size: 15%;
    @media only screen and (max-width: 1080px) {
        width: 130px;
        height: 30px;
        font-size: 14px;  
    }
    @media only screen and (max-width: 830px) {
        width: 110px;
        height: 20px;
        padding-left: 15px;
        font-size: 10px;
    }
    @media only screen and (max-width: 560px) {
        width: 70px;
        font-size: 8px;
    }
`;

const Container = styled.div`
    margin: 0 auto;
    width: 1250px;
    @media only screen and (max-width: 1440px) {
        width: 900px;
    }
    @media only screen and (max-width: 1080px) {
        width: 600px;
    }
    @media only screen and (max-width: 830px) {
        width: 550px;
    }
    @media only screen and (max-width: 735px) {
        width: 500px;
    }
    @media only screen and (max-width: 560px) {
        width: 350px;
    }
    @media only screen and (max-width: 410px) {
        width: 300px;
        margin: 0 auto;
    }
    min-width: 300px;
    margin-bottom: 15px;
`;

export default UserPage;