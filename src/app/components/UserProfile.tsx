import React from "react";

// Define the props type for type safety
type UserProfileProps = {
  name: string;
  email: string;
  profileImageUrl: string;
};

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  profileImageUrl,
}) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={profileImageUrl} alt="Profile" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
