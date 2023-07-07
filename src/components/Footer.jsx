import React from "react";
import { styled } from "styled-components";

function Footer() {
  return <FooterArea></FooterArea>;
}

export default React.memo(Footer);

const FooterArea = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;
