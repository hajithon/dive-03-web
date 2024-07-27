import styled from "@emotion/styled";
import React from "react";
import { typo, palette } from "../shared/styles/index";

const Quit = styled.button`
  background-color: ${palette.primary.blue70};
  color: ${palette.default.white};

  padding: 8px 44px;

  ${typo.body.h8}
`;

export const QuitButton = () => {
  return <Quit>나가기</Quit>;
};
