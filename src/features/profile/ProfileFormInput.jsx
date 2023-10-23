import { useState } from "react";

import { CircleIcon } from "../../icons/Icon";
import { useProfile } from "../../hooks/use-profile";
import axios from "../../config/axios";

export default function ProfileFormInput({ title, data, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(data);

  const hdlEdit = async () => {
    setIsEditing(true);
  };

  const hdlSave = async () => {};

  const hdlCancle = () => {
    setInputValue(data);
    setIsEditing(false);
  };

  return (
    <div className='flex'>
      <div className='border-b border-grey grow'>
        {!isEditing ? (
          <div className='border-b border-grey grow'>
            {title} :
            <span className='p-4'>{isEditing ? inputValue : data}</span>
            <CircleIcon onClick={hdlEdit} />
          </div>
        ) : (
          <div className='border-b border-grey grow'>
            {title} :
            <span className='p-4'>
              <input
                id={title}
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <CircleIcon text='OK' onClick={hdlSave} />
              <CircleIcon text='x' onClick={hdlCancle} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
