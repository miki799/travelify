import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import "./styles/friends.css";
import closeIcon from "./assets/closeIcon.svg";
import groupsIcon from "./assets/groupsIcon.svg";
import userIcon from "./assets/userIcon.svg";
import Toggle from "../trinkets/Toggle";
import Tooltip from "../trinkets/Tooltip";
import FriendChat from "./FriendChat";
import GroupChat from "./GroupChat";

const chatTypes = {
  friend: "friend",
  group: "group",
};

const ChatMenu = ({ chatsDisplay }) => {
  const [type, setType] = useState(chatTypes.friend);
  const blurState = useSelector((state) => state.blur.value);

  return (
    <Container blurState={blurState} className="font">
      <Header>
        <Heading>Komunikator</Heading>
        <CloseButton
          icon={closeIcon}
          onClick={(e) => {
            chatsDisplay("");
          }}
        />
      </Header>
      <ToggleContainer>
        <OptionContainer
          data-tip
          data-for="friendChats"
          active={type === chatTypes.friend ? true : false}
          icon={userIcon}
        />
        <Tooltip id="friendChats" place="bottom" text="Czaty ze znajomymi" />
        <Toggle
          value={type}
          setValue={setType}
          first={chatTypes.friend}
          second={chatTypes.group}
        />
        <OptionContainer
          data-tip
          data-for="groupChats"
          active={type === chatTypes.group ? true : false}
          icon={groupsIcon}
        />
        <Tooltip id="groupChats" place="bottom" text="Czaty grupowe" />
      </ToggleContainer>
      {type === chatTypes.friend && <FriendChat chatsDisplay={chatsDisplay} />}
      {type === chatTypes.group && <GroupChat chatsDisplay={chatsDisplay} />}
    </Container>
  );
};

const Container = styled.div`
  filter: ${({ blurState }) => (blurState === true ? "blur(15px)" : "none")};
  -webkit-filter: ${({ blurState }) =>
    blurState === true ? "blur(15px)" : "none"};
  position: fixed;
  width: 425px;
  background-color: ${({ theme }) => theme.color.lightBackground};
  right: 91px;
  top: 0;
  height: 100vh;
  z-index: 800;
  -webkit-box-shadow: -4px 1px 8px -2px rgba(0, 0, 0, 0.88);
  box-shadow: -4px 1px 8px -2px rgba(0, 0, 0, 0.88);
  @media only screen and (max-width: 1000px) {
    width: 300px;
  }
  @media only screen and (max-width: 720px) {
    width: calc(100vw - 90px);
  }
  @media only screen and (max-width: 720px) and (max-height: 560px) {
    width: calc(100vw - 80px);
  }
  @media only screen and (max-height: 560px) {
    right: 81px;
  }
  @media only screen and (max-width: 720px) and (max-height: 480px) {
    width: calc(100vw - 70px);
  }
  @media only screen and (max-height: 480px) {
    right: 71px;
  }
  @media only screen and (max-width: 720px) and (max-height: 400px) {
    width: calc(100vw - 60px);
  }
  @media only screen and (max-height: 400px) {
    right: 61px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.color.dark};
  @media only screen and (max-width: 1000px) {
    height: 55px;
  }
`;

const Heading = styled.p`
  margin-left: 12px;
  font-size: 30px;
  color: ${({ theme }) => theme.color.lightBackground};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }
`;

const CloseButton = styled.div`
  margin: 0 12px 0 auto;
  cursor: pointer;
  background-image: url(${({ icon }) => icon});
  width: 25px;
  height: 25px;
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  @media only screen and (max-width: 1000px) {
    width: 15px;
    height: 15px;
    background-size: 15px;
  }
  @media only screen and (max-width: 720px) {
    margin: 0 30px 0 auto;
  }
`;

const ToggleContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 80px max-content;
  justify-content: center;
  align-content: center;
  margin: 25px 15px 0px 0px;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: max-content 60px max-content;
  }
`;

const OptionContainer = styled.div`
  background: ${({ active }) => (active ? "rgba(18, 191, 206, 0.4)" : "")};
  -webkit-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
  text-align: center;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  padding: 5px 25px;
  margin: auto 25px;
  background-image: url(${({ icon }) => icon});
  background-size: 40%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  @media only screen and (max-width: 1000px) {
    width: 20px;
    height: 20px;
    padding: 5px 20px;
    margin: auto 25px;
  }
`;

export default ChatMenu;
