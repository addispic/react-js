import React, { useEffect, useState, useRef } from "react";
import {useDispatch, useSelector} from 'react-redux'

// icons
import { MdAttachFile } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { CiClock1 } from "react-icons/ci";

// slices
// notes
import {getNotes,notesSelector,isPostingSelector,addNewNote, isDeletingSelector,deleteNote} from '../features/notes/notesSlice'

const Home = () => {

  // hooks
  const dispatch = useDispatch()

  // states
  // slices
  // notes
  const notes = useSelector(notesSelector)
  // is posting
  const isPosting = useSelector(isPostingSelector)
  // is deleting
  const isDeleting = useSelector(isDeletingSelector)
// local states
  const [text, setText] = useState("");
  // references
  const textareaRef = useRef(null);
  // bottom reference
  const bottomReference = useRef(null)

  

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "18px"; // Reset the height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
  }, [text]);

  useEffect(()=>{
    bottomReference?.current.scrollIntoView({behavior: 'smooth'})
  })

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // get notes
  useEffect(()=>{
    dispatch(getNotes())
  },[])

  // add new post handler
  const addNewPostHandler = () => {
    if(text.trim()){
      dispatch(addNewNote({text}))
    }
    setText("")
  }

  return (
    <div className="bg-green-50/50 h-[92vh] flex flex-col">
      {/* list */}
      <div className="flex-grow overflow-y-auto p-3">
        {
            notes.map((noteItem)=>{
                return (
                    <div key={noteItem._id} className="mb-5">
                        {/* text */}
                        <div className="bg-white p-3 rounded-md shadow-sm text-sm">
                            <p>
                                {noteItem.text}
                            </p>
                        </div>
                        {/* footer */}
                        <footer className="my-1.5 flex items-center gap-x-1 text-xs ">
                            <CiClock1 />
                            <span>3 minute ago</span>
                            {
                              isDeleting ? <div /> : 
                            <button onClick={()=>{
                              dispatch(deleteNote(noteItem._id))
                            }} className="ml-3 text-red-500 hover:underline">delete</button>
                            }
                        </footer>
                    </div>
                )
            })
        }
      {/* bottom reference */}
      <div ref={bottomReference}/>
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
          {/* send button */}
          {
            isPosting ? <div className="w-[24px] aspect-square border-2 border-green-600 rounded-full border-t-transparent animate-spin" /> : <GrSend onClick={addNewPostHandler} className="cursor-pointer text-2xl text-green-600" />
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
