import { useState } from "react";
import { Link } from "react-router-dom";
import { ConfirmAlert } from "../ConfirmAlert";
import { SessionTimeoutAlert } from "../SessionTimeoutAlert";

import { currentUser } from "../../auth";

export function ProfilePage() {
  const [showAlert, setShowAlert] = useState(false);

  function handleToggleAlert() {
    setShowAlert(!showAlert);
  }
  function onClose() {
    setShowAlert(false);
  }

  return (
    <div>
      <h1 style={{ color: currentUser?.favColor }}>
        {currentUser?.fullName}'s Profile
      </h1>
      <div>
        <div>
          <span>Full Name: {currentUser?.fullName}</span>
        </div>
        <div>
          <span>Email: {currentUser?.email}</span>
        </div>
        <div>
          <span>Password: {currentUser?.password}</span>
        </div>
        <div>
          <span>Phone: {currentUser?.phone}</span>
        </div>
        <div>
          <span>Favorite Color: {currentUser?.favColor}</span>
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
