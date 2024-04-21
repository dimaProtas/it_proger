import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import AddUserForm from "../AddUserForm/AddUserForm";


const User = (props) => {
    let user = props.user;
    const [edit, setEdit] = useState(false);
    return (
        <div className="user">
            <MdDeleteForever onClick={() => props.deleteUser(user.id)}  className="delete-icon" />
            <FaRegEdit onClick={() => setEdit(!edit)} className="edit-icon" />
            <h3>{user.firstname} {user.lastname}</h3>
            <p>{user.bio}</p>
            <b>{user.isHappy ? 'Счаслив :)' : 'Не особо ):'}</b>
            {edit && <AddUserForm user={user} addUser={props.editUser} />}
        </div>
  );

}

export default User;