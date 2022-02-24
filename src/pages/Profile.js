import React from 'react';
import UserProfile from "../components/UserProfile";
import PhotoList from "../components/PhotoList";
import { useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams();
  return (
    <>
      <UserProfile id={id} />
      <PhotoList id={id} />
    </>
  );
}

export default Profile;
