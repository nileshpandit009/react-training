import React from "react";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import GoBackLink from "./GoBackLink";

const capitalize = (str) => {
  if (str)
    return str
      .split(" ")
      .map((s) => {
        const lower = s.toLowerCase();
        return s.charAt(0).toUpperCase() + lower.slice(1);
      })
      .join(" ");
};

function UserDetails({ user }) {
  return (
    <div className="p-3">
      <Card>
        <CardHeader>
          <CardTitle tag="h4">{capitalize(user.full_name_display)}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            <b>ID:</b> <span>{user.id}</span>
          </CardText>
          <CardText>
            <b>Username:</b> <span>{user.username}</span>
          </CardText>
          <CardText>
            <b>Email:</b> <span>{user.email}</span>
          </CardText>
          <CardText>
            <b>Status:</b> <span>{user.is_active ? "Active" : "Inactive"}</span>
          </CardText>
        </CardBody>
      </Card>
      <GoBackLink />
    </div>
  );
}

export default UserDetails;
