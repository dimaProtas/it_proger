import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


const User = (props) => {
    let user = props.user;
    return (
        <div className="user">
            <MdDeleteForever onClick={() => props.deleteUser(user.id)}  className="delete-icon" />
            <FaRegEdit className="edit-icon" />
            <h3>{user.firstname} {user.lastname}</h3>
            <p>{user.bio}</p>
            <b>{user.isHappy ? 'Счаслив :)' : 'Не особо ):'}</b>
        </div>
  );

}

export default User;