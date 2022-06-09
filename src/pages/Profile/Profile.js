import React, { useState, useRef, useEffect } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import "./style.css"
const Profile = () => {
    const [edit, setEdit] = useState(false);
    const inputReference = useRef(null);

    const editInformation = () => {
        setEdit(true);
    }
    useEffect(() => {
        if (edit == true)
            inputReference.current.focus();
    }, [edit])
    return (
        <>
            <div className="profile">
                <div className="profile-title">
                    <h1>My Profile</h1>
                    <button onClick={editInformation}><BiEditAlt /> Edit</button>
                </div>
                <h2>Personal Information</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                <div className="personal-information-wrap">
                    <div className="personal-information-wrap-column">
                        <div className="information-item">
                            <label>First Name</label>
                            <div className="input-wrap">
                                <input ref={inputReference} disabled={!edit} type="text" value="Allie" />
                            </div>
                        </div>
                        <div className="information-item">
                            <label>Last Name</label>
                            <div className="input-wrap">
                                <input disabled={!edit} type="text" value="Grater" />
                            </div>
                        </div>
                    </div>
                    <div className="personal-information-wrap-column">
                        <div className="information-item">
                            <label>Display Name</label>
                            <div className="input-wrap">
                                <input disabled={!edit} type="text" value="Allie Grater" />
                                <BiEditAlt />
                            </div>
                        </div>
                        <div className="information-item">
                            <label>User Name</label>
                            <div className="input-wrap">
                                <input disabled={!edit} type="text" value="AllieGrater12345644@" />
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Contact Information</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                <div className="personal-information-wrap">
                    <div className="personal-information-wrap-column">
                        <div className="information-item">
                            <label>Email</label>
                            <div className="input-wrap">
                                <input disabled={true} type="text" value="AllieGrater12345644@gmail.com" />
                                <MdOutlineEmail />
                            </div>
                        </div>
                        <div className="information-item">
                            <label>Phone Number</label>
                            <div className="input-wrap">
                                <input disabled={!edit} type="text" value="+91 1234567890" />
                                <ImPhone />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-setting">
                    <h3>This account was created on January 10, 2022, 02:12 PM</h3>
                    <div className="profile-setting-button-wrap">
                        <button className="profile-setting-cancel">
                            Cancel
                        </button>
                        <button className="profile-setting-save">
                            Save Change
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;