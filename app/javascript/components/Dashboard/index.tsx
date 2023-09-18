import React from "react";
import { Layout } from "../Layout";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";

type Props = {};

export const Dashboard = (props: Props) => {
  return (
    <Layout>
      Profile
      <div className="max-w-xl space-y-2">
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Textarea
          placeholder="Address"
          minRows={4}
          variant="outlined"
          color="neutral"
        />
      </div>
    </Layout>
  );
};
