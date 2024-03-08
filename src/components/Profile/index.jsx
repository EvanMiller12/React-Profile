import { useState } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import { ConfirmAlert } from "../ConfirmAlert";
import { SessionTimeoutAlert } from "../SessionTimeoutAlert";

import { currentUser } from "../../auth";

export function ProfilePage() {
  const userEmail = useRouteLoaderData("root")?.user;
  const user = currentUser.get(userEmail);

  const [showAlert, setShowAlert] = useState(false);

  function handleToggleAlert() {
    setShowAlert(!showAlert);
  }
  function onClose() {
    setShowAlert(false);
  }

  return (
    <div>
      <h1 style={{ color: user?.favColor }}>{user?.fullName}'s Profile</h1>
      <div>
        <div>
          <span>Full Name: {user?.fullName}</span>
        </div>
        <div>
          <span>Email: {user?.email}</span>
        </div>
        <div>
          <span>Password: {user?.password}</span>
        </div>
        <div>
          <span>Phone: {user?.phone}</span>
        </div>
        <div>
          <span>Favorite Color: {user?.favColor}</span>
        </div>
        <div className="form-actions">
          <Link to="/create-edit-profile" className="btn btn-primary mr-12">
            Edit Profile
          </Link>

          <button onClick={handleToggleAlert} className="btn btn-danger">
            Delete Profile
          </button>
        </div>
      </div>
      {showAlert && <ConfirmAlert onClose={onClose} />}

      <SessionTimeoutAlert />
    </div>
  );
}
