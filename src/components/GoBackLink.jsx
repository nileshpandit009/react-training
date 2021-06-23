import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

function GoBackLink() {
  const history = useHistory();
  return (
    <Button color="link" onClick={history.goBack}>
      Go Back
    </Button>
  );
}

export default GoBackLink;
