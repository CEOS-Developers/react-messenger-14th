import React from "react";
import { useParams } from "react-router-dom";

function Chat() {
  let { id } = useParams();

  return (
    <>
      <div>CHat</div>
    </>
  );
}

export default Chat;
