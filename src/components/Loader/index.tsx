import React, { memo } from "react";
import Spinner from "react-bootstrap/Spinner";

import { LoaderWrapper } from "./styles";

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <Spinner animation="border" role="status" variant="light" />
    </LoaderWrapper>
  );
};

export default memo(Loader);
