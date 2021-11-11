import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import GroupAlbumCreatorPage from "../components/groupAlbumCreator/GroupAlbumCreatorPage";
import UserTemplate from "../templates/UserTemplate";
import { endpoints } from "../url";
import { Loading, ErrorAtLoading } from "../templates/LoadingTemplate";
import {
  albumCreator,
  groupMember,
  errorTypes,
  mapFriendsToSelect,
} from "../miscellanous/Utils";
import {
  clearStore,
  setAlbumPhotosRedux,
  setMainPhotoRedux,
  setBasicInfo,
  setCoordinate,
  setRights,
  setAlbumOwner,
  setMembers,
} from "../redux/groupAlbumCreatorSlice";
import { useDispatch } from "react-redux";

const GroupAlbumCreator = () => {
  const location = useLocation();
  const [error, setError] = useState(null);
  const [albumDetailsFetchFinished, setAlbumDetailsFetchFinished] =
    useState(false);
  const [groupMembersFetchFinished, setGroupMembersFetchFinished] =
    useState(false);

  const dispatch = useDispatch();

  const [creatorType, setCreatorType] = useState(null);
  const [editedAlbumId, setEditedAlbumId] = useState(null);
  const [groupId, setGroupId] = useState(null);

  useEffect(() => {
    if (!sessionStorage.getItem("Login")) {
      throw new Error(errorTypes.noAccess);
    } else {
      dispatch(clearStore());
      if (location.state === undefined) {
        /* when someone types url manually, 
        groupAlbumCreator can't be opened without passing state */
        throw new Error(errorTypes.notFound);
      }
      if (location.state !== undefined && location.state.groupId) {
        setGroupId(location.state.groupId);
      }
      if (location.state !== undefined && location.state.albumId) {
        setCreatorType(location.state.creatorType);
        setEditedAlbumId(location.state.albumId);
        getGroupAlbumToEdit();
        getMembers();
      } else {
        dispatch(setRights(groupMember.owner)); // person who creates is the owner of the album
        setCreatorType(albumCreator.creation);
        setAlbumDetailsFetchFinished(true);
        setGroupMembersFetchFinished(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getGroupAlbumToEdit() {
    setAlbumDetailsFetchFinished(false);
    await axios({
      method: "get",
      url: endpoints.getGroupAlbumDetails.replace(
        /:groupAlbumId/i,
        location.state.albumId
      ),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Bearer")}`,
      },
    })
      .then(({ data }) => {
        console.log(data);
        if (
          data.groupOwner.id.toString() ===
            sessionStorage.getItem("loggedUserId") ||
          data.albumOwner.id.toString() ===
            sessionStorage.getItem("loggedUserId")
        ) {
          dispatch(setRights(groupMember.owner));
          dispatch(setAlbumPhotosRedux(data.photos));
        } else {
          dispatch(setRights(groupMember.member));
          dispatch(
            setAlbumPhotosRedux(
              data.photos.filter(
                (item) =>
                  item.owner.id.toString() ===
                  sessionStorage.getItem("loggedUserId")
              )
            )
          );
        }
        dispatch(setMainPhotoRedux(data.mainPhoto));
        dispatch(
          setBasicInfo({
            name: data.name,
            description: data.description,
          })
        );
        dispatch(setCoordinate(data.coordinate));
        dispatch(setAlbumOwner(data.albumOwner));
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setAlbumDetailsFetchFinished(true);
      });
  }

  async function getMembers() {
    setGroupMembersFetchFinished(false);
    await axios({
      method: "get",
      url: endpoints.getGroupDetails + location.state.groupId,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Bearer")}`,
      },
    })
      .then(({ data }) => {
        console.log(data);
        console.log(
          mapFriendsToSelect(
            data.members.filter(
              (item) =>
                item.id.toString() !== sessionStorage.getItem("loggedUserId")
            ), "shared"
          )
        );
        dispatch(
          setMembers(
            mapFriendsToSelect(
              data.members.filter(
                (item) =>
                  item.id.toString() !== sessionStorage.getItem("loggedUserId")
              ), "shared"
            )
          )
        );
      })
      .catch((error) => {
        console.error(error);
      });
    setGroupMembersFetchFinished(true);
  }

  return (
    <UserTemplate>
      {albumDetailsFetchFinished && groupMembersFetchFinished && !error ? (
        <GroupAlbumCreatorPage
          creatorType={creatorType}
          editedAlbumId={editedAlbumId}
          groupId={groupId}
        />
      ) : !error ? (
        <Loading />
      ) : (
        <ErrorAtLoading />
      )}
    </UserTemplate>
  );
};

export default GroupAlbumCreator;
