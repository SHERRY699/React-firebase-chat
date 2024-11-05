import React, { useState } from "react";

export default function Container() {
  const [add, setAdd] = useState(true);
  return (
    <div className="w-[80%] h-[800px] bg-customColor backdrop-blur-saturate rounded-md flex flex-col">
      <main className="w-[23%] h-full flex flex-col gap-10 items-center  ">
        <div className="chat-listHeader flex w-full mt-2 h-max items-center justify-between px-2">
          <div className="flex gap-4 items-center pl-3 ">
            <img
              src={"./avatar.png"}
              className="w-[50px] h-[50px] rounded-full"
              alt="avatar.png"
            />
            <h1 className="text-white font-bold text-xl">Jhon Doe</h1>
          </div>
          <div className="flex items-center gap-6">
            <img src="./video.png" className="w-[25px]" />
            <img src="./edit.png" className="w-[25px]" />
            <img src="./more.png" className="w-[25px]" />
          </div>
        </div>
        <div className="search flex w-full  items-center justify-between px-6">
          <div className="flex bg-customColor gap-6 h-10 items-center rounded-md ">
            <button>
              {" "}
              <img src="./search.png" className="w-[25px] h-[25px]" />
            </button>
            <input
              placeholder="Search....."
              className="bg-transparent  w-full outline-none text-white  "
            />
          </div>
          <button
            onClick={() => {
              setAdd((prev) => !prev);
            }}
            className="px-2 py-2 bg-customColor rounded-md"
          >
            <img
              src={add ? "./plus.png" : "./minus.png"}
              className="w-[20px] h-[20px]"
            />
          </button>
        </div>
      </main>
    </div>
  );
}
