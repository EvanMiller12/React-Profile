import { useState } from "react";
import { Form, useActionData, useRouteLoaderData } from "react-router-dom";

import Select from "react-select";
import { SessionTimeoutAlert } from "../SessionTimeoutAlert";

import { currentUser } from "../../auth";

import { colorOptions } from "../../data";

function findSelectOption(options, value) {
  return options.filter(option => {
    return option.value === value;
  });
}

export function ProfileCreateEditPage() {
  const actionData = useActionData();

  const userEmail = useRouteLoaderData("root")?.user;
  const user = currentUser.get(userEmail);

  const [fullName, setFullName] = useState(user?.fullName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState(user?.password || "");
  const [phone, setPhone] = useState(user?.phone || "");

  return (
    <div>
      {/* check if new user by fullName val presence */}
      {fullName && (
        <h1 style={{ color: user?.favColor }} className="text-center">
          Edit {fullName}'s Profile
        </h1>
      )}
      <Form method="post" className="form">
        {/* <input type="hidden" name="redirectTo" value={from} /> */}
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
              defaultValue={findSelectOption(colorOptions, user?.favColor)}
              isSearchable={true}
              name="favColor"
              options={colorOptions}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary mr-12">
              Save
            </button>
            {/* navigates back to profile */}
            <button className="btn btn-secondary">Cancel</button>
          </div>
        </div>
        {actionData && actionData.error ? (
          <p style={{ color: "red" }}>{actionData.error}</p>
        ) : null}
      </Form>

      {user?.fullName && <SessionTimeoutAlert />}
    </div>
  );
}
