import React, {useState} from "react";
import styled, { useTheme } from "styled-components";
import "./friends.css";
import noMessageIcon from "./assets/noMessageIcon.svg";
import messageAvailableIcon from "./assets/messageAvailableIcon.svg";
import underConstructionIcon from "./assets/underConstructionIcon.svg";
import noProfilePictureIcon from "../../assets/noProfilePictureIcon.svg";


const FriendItem = ({user, selectFriend, chatBlock}) => {
const [messageNew, setMessageNew] = useState(user.messagesNew);
	return (
    	<Container 
        chatBlock={chatBlock} 
        className="font" 
        onClick={(e) => {
          if (!chatBlock) {
            setMessageNew(false)
            selectFriend(user)
          }
        }}
      >
      		<Photo
        		src={user.profilePicture !== undefined && user.profilePicture ? user.profilePicture : noProfilePictureIcon}
        		alt="Profile picture"
            onError={(e) => {e.target.onError = null; e.target.src=noProfilePictureIcon;}}
      		/>
      		<Name>
				{user.name + " " + user.lastName}
			</Name>
      {
        !chatBlock ?
          <Icon src={ messageNew ? 
            messageAvailableIcon : noMessageIcon
          }/>
         : <Communicate>Czat nie jest zooptymalizowany dla ekranów o takich wymiarach.</Communicate>
      }
    	</Container>
  	);
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;
  padding: 0px 5px;
  &:hover{
    border-radius:  ${({chatBlock}) => !chatBlock ? "30px" : ""};
    background: ${({chatBlock}) => !chatBlock ? "rgba(18, 191, 206, 0.4)" : ""};
    transition:  ${({chatBlock}) => !chatBlock ?  "background-color 0.2s" : ""};
  }
`;

const Photo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  margin-right: 10px;
  border: 2px solid ${({theme}) => theme.color.lightTurquise}; 
  @media only screen and (max-width: 1000px) {
    width: 42px;
    height: 42px;
  }
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  @media only screen and (max-width: 1000px) {
    font-size: 12px;
  }
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
  margin: 0 10px 0 auto;
  @media only screen and (max-width: 1000px) {
    width: 36px;
    height: 36px;
  }
`

const Communicate = styled.p`
  display: inline-block;
  width: 35%;
  text-align: center;
  margin-left: auto;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  color: ${({theme}) => theme.color.redAlert};
  @media only screen and (max-width: 400px) {
    font-size: 8px;
  }
`;

export default FriendItem;
