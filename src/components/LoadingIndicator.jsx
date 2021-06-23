import React from "react";
import { Spinner } from "reactstrap";

function LoadingIndicator() {
  return (
    <div className="vh-100">
      <Spinner className="position-fixed top-50 start-50" color="primary">
        {""}
      </Spinner>
    </div>
  );
}

export default LoadingIndicator;
