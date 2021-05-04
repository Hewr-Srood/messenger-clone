import React, { forwardRef } from "react";
import "./Message.css";
import { Card, CardContent, Typography } from "@material-ui/core";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;

  return (
    <>
      {!isUser && (
        <p
          style={{
            textAlign: "left",
            marginLeft: "1rem",
            marginBottom: "-5px",
          }}
        >
          {message.username}
        </p>
      )}
      <div ref={ref} className={`message ${isUser && "message__user"}`}>
        <Card className={isUser ? "message__userCard" : "message__guestCard"}>
          <CardContent>
            <Typography color="white" variants="h5" component="h2">
              {message.message}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
});
export default Message;
