import React from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Divider,
  Notification,
} from "@mui/material";
// this is where all of a user's events would be populated

// this file is a strech feature

const Event = ({ eventName }) => {
  return (
    <Container>
      <Typography>Event: {eventName}</Typography>
    </Container>
  );
};

export default Event;
