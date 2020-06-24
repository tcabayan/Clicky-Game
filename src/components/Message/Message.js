import React from "react";
import "./Message.css";

const Message = props => (
    <div id="gameOver">
        {props.gameOver}
    </div>
);

export default Message;