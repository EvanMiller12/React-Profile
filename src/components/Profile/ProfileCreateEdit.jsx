import { useState } from "react";
import { Link, Form, useActionData } from "react-router-dom";

import Select from "react-select";
import { SessionTimeoutAlert } from "../SessionTimeoutAlert";

import { currentUser } from "../../auth";

import { colorOptions } from "../../data";

export function ProfileCreateEditPage() {
  const actionData = useActionData();

  const [fullName, setFullName] = useState(currentUser?.fullName);
  const [email, setEmail] = useState(currentUser?.email);
  const [password, setPassword] = useState(currentUser?.password);
  const [phone, setPhone] = useState(currentUser?.phone);
  const [favColor, setFavColor] = useState(currentUser?.favColor);

  function findSelectedOption(options) {
    // find obj from select options to set default option selected
    return options.filter(option => {
      return option.value === favColor;
    });
  }

  return (
    <div>
      {/* check if new user by fullName val presence */}
      {fullName && (
        <h1 style={{ color: favColor }} className="text-center">
          Edit {fullName}'s Profile
        </h1>
      )}
      <Form method="post" className="form">
        <div className="form-content">
          <label htmlFor="fullName">
            *Full Name:
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className="form-input"
            />
          </label>
          <label htmlFor="Phone">
            Phone:
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="form-input"
            />
          </label>
          <label htmlFor="email">
            *Email:
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="form-input"
            />
          </label>
          <label htmlFor="password">
            *Password:
            <input
              type="text"
              id="password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="form-input"
            />
          </label>
          <div>
            *<label>Favorite Color</label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={findSelectedOption(colorOptions)}
              onChange={e => setFavColor(e.value)}
              isSearchable={true}
              name="favColor"
              options={colorOptions}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary mr-12">
              Save
            </button>
            {/* cancel submission and redirect to profile page */}
            <Link to="/profile" className="btn btn-secondary">
              Cancel
            </Link>
          </div>
        </div>
        {actionData && actionData.error ? (
          <p style={{ color: "red" }}>{actionData.error}</p>
        ) : null}
      </Form>

      {fullName && <SessionTimeoutAlert />}
    </div>
  );
}
