import React, { memo } from "react";
import Spinner from "react-bootstrap/Spinner";

import { LoaderWrapper } from "./styles";

const Loader: React.FC = () => {
  return (
    <LoaderWrapper data-testid="loading">
      <Spinner animation="border" role="status" variant="light" />
    </LoaderWrapper>
  );
};

export default memo(Loader);
