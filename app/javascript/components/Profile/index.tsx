import React from "react";
import { Layout } from "../Layout";
import { useProfile } from "../../hooks/useProfile";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/material/CircularProgress";

export const Profile = () => {
  const { isLoading, user } = useProfile();

  return (
    <Layout>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography level="h2">Profile</Typography>
          <Typography>{user.name}</Typography>
          <Typography>{user.email}</Typography>
        </>
      )}
    </Layout>
  );
};
