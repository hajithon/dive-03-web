import styled from "@emotion/styled";
import React from "react";
import { typo, palette } from "../shared/styles/index";
import SNB_Profile from "../assets/images/DefaultProfile.svg";
import SNB_Point from "../assets/icons/Point.svg";
import SNB_Bookmark from "../assets/icons/Bookmark.svg";
import SNB_History from "../assets/icons/History.svg";
import { Space } from "../shared/Space";

const SideNavBar = styled.div`
  border: 1px solid ${palette.coolGray.gray20};
  border-top: none;
  position: absolute;
  top: 80px;
  width: 280px;
  height: 100%;

  padding: 64px 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 64px 0 0 0;
`;

const User = styled.div`
  .user-name {
    color: ${palette.coolGray.gray70};
    ${typo.head.h3}
  }
  .user-tier {
    color: ${palette.coolGray.gray40};
    ${typo.body.h5}
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  width: 240px;

  display: flex;
  flex-direction: column;

  .snb-user-point {
    background-color: ${palette.primary.blue10};
    border-radius: 8px;
    box-sizing: border-box;
    padding: 14px 16px;
    .snb-user-point-text {
      ${typo.body.h7};
      color: ${palette.coolGray.gray70};
    }
    .snb-user-point-value {
      ${typo.body.h7};
      color: ${palette.primary.blue100};
    }
    display: flex;
  }
`;

const ListItem = styled.div`
  display: flex;
  padding: 14px 14px;
  box-sizing: border-box;
  div {
    color: ${palette.coolGray.gray60};
    ${typo.body.h8};
  }
`;

export const SNB = ({ user }) => {
  return (
    <SideNavBar>
      <User>
        <img src={SNB_Profile} width="150px"></img>
        <Space height={19}></Space>
        <div className="user-name">{user.name} 님</div>
        <Space height={10}></Space>
        <div className="user-tier">{user.tier}</div>
      </User>
      <Space height={50}></Space>
      <List>
        <div className="snb-user-point">
          <img src={SNB_Point} width={24}></img>
          <Space width={1}></Space>
          <div className="snb-user-point-text">누적 포인트</div>
          <Space width={50}></Space>
          <div className="snb-user-point-value">{user.point}</div>
          {/** SNB space-between 적용하기 */}
        </div>
        <Space height={14}></Space>

        <ListItem>
          <img src={SNB_Bookmark} width="24px"></img>
          <Space width={18}></Space>
          <div>스크랩한 글</div>
        </ListItem>

        <ListItem>
          <img src={SNB_History} width="24px"></img>
          <Space width={18}></Space>
          <div>히스토리</div>
        </ListItem>
      </List>
    </SideNavBar>
  );
};
