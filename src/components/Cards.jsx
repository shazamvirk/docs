import React, { useState } from 'react';
import { FaRegFileImage } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from 'framer-motion';

function Cards({ data, reference, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [tempText, setTempText] = useState(data.desc);

  const handleBlur = () => {
    setEditing(false);
    onUpdate(tempText);
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 900, bounceDamping: 10 }}
      className='relative flex-shrink-0 w-40 h-60 rounded-[30px] bg-zinc-800 py-6 px-4 text-white overflow-hidden'
    >
      <FaRegFileImage />

      {editing ? (
        <textarea
          autoFocus
          value={tempText}
          onChange={(e) => setTempText(e.target.value)}
          onBlur={handleBlur}
          className="w-full h-20 bg-transparent border border-gray-500 mt-3 text-xs p-1 resize-none"
        />
      ) : (
        <p
          onClick={() => setEditing(true)}
          className='leading-tight text-xs mt-5 cursor-pointer hover:underline'
        >
          {data.desc}
        </p>
      )}

      <div className="footer absolute bottom-0 left-0 w-full text-white">
        <div className="foot flex justify-between items-center py-3 px-4">
          <p>{data.filesize}</p>
          <IoIosClose
            onClick={onDelete}
            className="text-lg cursor-pointer hover:text-red-400"
          />
        </div>

        {data.tag.isopen && (
          <div className={`tag py-2 w-full bg-blue-800 text-center text-white`}>
            <h3 className='text-sm'>{data.tag.title}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
