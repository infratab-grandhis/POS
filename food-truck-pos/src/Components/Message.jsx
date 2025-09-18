import React from "react";
import { Typography, Box } from "@mui/material";

const Message = ({ config: {color, messsage} }) => {
  return (
    <Box sx={{ display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"}}>
      <Typography variant="body1" color={color}>
        {messsage || "Something went wrong. Please try again."}
      </Typography>
    </Box>
  );
};

export default Message;
