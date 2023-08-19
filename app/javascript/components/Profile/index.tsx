import React, { useEffect } from "react";
import { Layout } from "../Layout";
import { getCurrentUser } from "../../actions/profile";

export const Profile = () => {
  useEffect(async () => {
    const user = await getCurrentUser();
    console.log("user:", user);
  }, []);

  return <Layout>Profile</Layout>;
};
