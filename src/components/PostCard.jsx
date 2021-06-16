import React from "react";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";

function PostCard({ post, handleClick }) {
  return (
    <Card onClick={handleClick} className="m-2">
      <CardHeader>
        <CardTitle tag="h5">{post.title}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>{post.body}</CardText>
      </CardBody>
    </Card>
  );
}

export default PostCard;
