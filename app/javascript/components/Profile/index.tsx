import React, { useEffect, useState } from "react";
import { Layout } from "../Layout";
import { getCurrentUser } from "../../actions/profile";
import Typography from "@mui/joy/Typography";

export const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const getUser = async () => {
    try {
      const user = await getCurrentUser();
      setUser(user);
    } catch (err) {
      console.log("Error on fetching user", err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Layout>
      <Typography level="h2">Profile</Typography>
      <Typography>{user.name}</Typography>
      <Typography>{user.email}</Typography>
    </Layout>
  );
};
