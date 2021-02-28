import React from "react";
import Head from "next/head";

import AppLayout from "../components/AppLayout";
import NickNameEditForm from "../components/NickNameEditForm";
import FollowList from "../components/FollowList";
import FollowerList from "../components/FollowList";

const profile = () => {
  const followerList = [
    { nickname: "김길중" },
    { nickname: "김용우" },
    { nickname: "김민국" },
  ];
  const followingList = [
    { nickname: "윤명" },
    { nickname: "윤정" },
    { nickname: "유재호" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NickNameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowerList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default profile;
