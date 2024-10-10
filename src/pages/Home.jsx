import React, { useEffect, useState, useRef } from "react";

// icons
import { MdAttachFile } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { CiClock1 } from "react-icons/ci";

const Home = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "18px"; // Reset the height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="bg-green-50/50 h-[92vh] flex flex-col">
      {/* list */}
      <div className="flex-grow overflow-y-auto p-3">
        {
            [...Array(23)].map((item,index)=>{
                return (
                    <div className="mb-5">
                        {/* text */}
                        <div className="bg-white p-3 rounded-md shadow-sm text-sm">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium delectus recusandae reiciendis facilis illum similique eveniet culpa itaque? Placeat laboriosam soluta accusantium qui! Quidem ad cum exercitationem, a iusto dicta quasi?
                            </p>
                        </div>
                        {/* footer */}
                        <footer className="my-1.5 flex items-center gap-x-1 text-xs ">
                            <CiClock1 />
                            <span>3 minute ago</span>
                            <button className="ml-3 text-red-500 hover:underline">delete</button>
                        </footer>
                    </div>
                )
            })
        }
      </div>
      {/* add new note form */}
      <div className="bg-white p-3">
        <div className="flex items-end gap-x-3">
          {/* file picker */}
          <MdAttachFile className="cursor-pointer text-2xl text-green-600" />
          {/* text input */}
          <div className="flex-grow border border-green-600 px-3 py-0.5 rounded-md">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={handleChange}
              className="w-full mb-[-2px] focus:ring-0 p-0 focus:outline-none border-none bg-transparent  resize-none h-[18px] text-sm"
              name=""
              placeholder="note text"
              id="note-text-input"
            ></textarea>
          </div>
          {/* send butteon */}
          <GrSend className="cursor-pointer text-2xl text-green-600" />
        </div>
      </div>
    </div>
  );
};

export default Home;
