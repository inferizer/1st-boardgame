import { useState } from "react";

import { CircleIcon } from "../../icons/Icon";
import { useProfile } from "../../hooks/use-profile";
import { useAuth } from "../../hooks/use-auth";

export default function ProfileFormInput({ title, data, name }) {
  const { authUser, setAuthUser } = useAuth();
  const { editProfile } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(data || "");

  const hdlEdit = () => {
    setIsEditing(true);
  };

  const onEdit = (name, value) => {
    const updatedUser = { ...authUser, [name]: value };
    const updatedProfile = editProfile(updatedUser);
    setAuthUser(updatedProfile);
  };

  const hdlSave = () => {
    setIsEditing(false);

    onEdit(name, inputValue);
    window.location.reload();
  };

  const hdlCancel = () => {
    setInputValue(data);
    setIsEditing(false);
  };

  return (
    <div className='flex'>
      <div className='border-b border-grey grow'>
        {!isEditing ? (
          // Display the data or input field based on the edit mode
          <div className='border-b border-grey grow'>
            {title} :
            <span className='flex justify-between p-4'>
              {isEditing ? (
                <input
                  className='border border-grey rounded-md p-2'
                  id={title}
                  type='text'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              ) : (
                inputValue
              )}

              {name !== "email" && <CircleIcon text='E' onClick={hdlEdit} />}
            </span>
          </div>
        ) : (
          // Display the input field for editing
          <div className='border-b border-grey grow'>
            {title} :
            <span className='flex justify-between items-center p-4'>
              <input
                className='border border-grey rounded-md p-2'
                name={name}
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <CircleIcon text='S' onClick={hdlSave} />
              <CircleIcon text='X' onClick={hdlCancel} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
