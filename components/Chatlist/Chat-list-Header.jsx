import React from "react";

function ChatlistHeader() {
  return (
    <div className="chat-listHeader flex w-full h-max items-center justify-between px-2">
      <div className="flex gap-2 items-center">
        <img
          src={"./avatar.png"}
          className="w-[50px] h-[50px] rounded-full"
          alt="avatar.png"
        />
        <h1 className="text-white font-bold text-xl">Jhon Doe</h1>
      </div>
      <div className="flex items-center gap-4">
        <img src="./video.png" className="w-[25px]" />
        <img src="./edit.png" className="w-[25px]" />
        <img src="./more.png" className="w-[25px]" />
      </div>
    </div>
  );
}

export default ChatlistHeader;
