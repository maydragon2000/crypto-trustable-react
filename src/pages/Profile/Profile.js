import React, { useState, useRef, useEffect } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./style.css"
const Profile = () => {
    const [edit, setEdit] = useState(false);
    const inputReference = useRef(null);
    const [FirstName, setFirstName] = useState("Allie");
    const [lastName, setLastName] = useState("Grater");
    const [displayName, setDisplayName] = useState("Allie Grater");
    const [userName, setUserName] = useState("AllieGrater12345644@");
    const [phoneValue, setPhoneValue] = useState("+86 1234567890");
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
                                <input ref={inputReference} disabled={!edit} type="text" onChange={(e) => setFirstName(e.target.value)} value={FirstName} />
                            </div>
                        </div>
                        <div className="information-item">
                            <label>Last Name</label>
                            <div className="input-wrap">
                                <input disabled={!edit} type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                            </div>
                        </div>
                    </div>
                    <div className="personal-information-wrap-column">
                        <div className="information-item">
                            <label>Display Name</label>
                            <div className="input-wrap">
                                <input disabled={!edit} type="text" onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
                                <BiEditAlt />
                            </div>
                        </div>
                        <div className="information-item">
                            <label>User Name</label>
                            <div className="input-wrap">
                                <input disabled={!edit} type="text" onChange={(e) => setUserName(e.target.value)} value={userName} />
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
                                <PhoneInput
                                    country={'us'}
                                    value={phoneValue}
                                    onChange={(e) => setPhoneValue(e)}
                                    disabled={!edit}
                                />
                                <ImPhone />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-setting">
                    <h3>This account was created on January 10, 2022, 02:12 PM</h3>
                    <div className="profile-setting-button-wrap">
                        <button className="profile-setting-cancel" onClick={() => setEdit(false)} >
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