import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { typo, palette } from "../shared/styles/index";
import logo from "../assets/images/Logo.svg";
import { QuitButton } from "../components/QuitButton";

const GlobalNavBar = styled.div`
  width: 100vw;
  height: 78px;
  box-sizing: border-box;
  border: 1px solid ${palette.coolGray.gray20};
  padding: 0 45px 0 45px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${palette.default.white};

  position: absolute;
  top: 0;

  gap: auto;

  div {
    position: relative;
    display: flex;
    align-items: center;
    gap: 60px;
  }

  div.title {
    color: ${palette.coolGray.gray50};
    ${typo.body.h5}
  }
`;

export const GNB = (children) => {
  return (
    <>
      {children ? (
        <GlobalNavBar>
          <div>
            <img src={logo} width="108.69px"></img>
            <div className="title">{children.props}</div>
          </div>

          <QuitButton></QuitButton>
        </GlobalNavBar>
      ) : (
        <GlobalNavBar>
          <img src={logo} width="108.69px"></img>
        </GlobalNavBar>
      )}
    </>
  );
};
