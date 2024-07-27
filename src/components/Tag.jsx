import { typo, palette } from "../shared/styles/index";
import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const TagButton = styled.button`
  border: none;
  border-radius: 20px;

  height: auto;

  padding-block: 0px;
  padding-inline: 0px;
  padding: 8px 16px;

  background-color: ${(props) =>
    props.clicked ? palette.default.white : palette.primary.blue70};

  ${typo.body.h8}
  color: ${(props) =>
    props.clicked ? palette.coolGray.gray70 : palette.default.white}
`;

export const Tag = (props) => {
  return <TagButton clicked={props.clicked}>{props.tag}</TagButton>;
};
