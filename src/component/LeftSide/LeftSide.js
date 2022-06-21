import React, { useEffect, useState } from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiLock2Line } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { attemptUploadImage } from "../../store/thunks/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const LeftSide = () => {
    const { user } = useSelector((state) => state.user);
    const [sendImageData, setSendImageData] = useState({
        userName: user.name,
        image: ''
    })
    const uploadedImage = user.image;
    const [disable, setDisable] = useState(true);
    console.log(uploadedImage, "uploadImage");
    const [isVisible, setIsVisible] = useState(true)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const hiddenFileInput = React.useRef(null);
    useEffect(() => {
        if (sendImageData.image !== "")
            setDisable(false);
    })
    const success = () => toast.success("Success Save New Avatar.");
    const failed = () => toast.error("Error Save New Avatar.")
    const sendUploadImage = () => {
        dispatch(attemptUploadImage(sendImageData)).then((res) => {
            if (res === true)
                success();
        }).catch((res) => {
            failed();
        })
    }
    return (
        <>
            <SideNav expanded={isVisible} >
                <ToastContainer limit={3} autoClose={3000} hideProgressBar={true} theme="colored" />
                <SideNav.Toggle
                    onClick={() => {
                        setIsVisible(!isVisible);
                    }}
                />
                <img className="avatar" onClick={handleClick} alt="not fount" src={selectedImage ? URL.createObjectURL(selectedImage) : uploadedImage === undefined ? "/image/user.jpg" : `http://127.0.0.1:5000/images/${uploadedImage}`} />
                <button disabled={disable} className="btn save-uploadImage" onClick={sendUploadImage}>Save</button>
                <input type="file"
                    style={{ display: "none" }}
                    ref={hiddenFileInput}
                    name="myImage" onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSendImageData({
                            ...sendImageData, image: event.target.files[0]
                        })
                        setSelectedImage(event.target.files[0]);
                    }} />
                <h2>Allie Grater</h2>
                <p>AllieGrater12345644@</p>
                <SideNav.Nav defaultSelected="profile">
                    <NavItem eventKey="profile" onClick={() => navigate("/profile")}>
                        <NavIcon>
                            <CgProfile />
                        </NavIcon>
                        <NavText>My Profile</NavText>
                    </NavItem>
                    <NavItem eventKey="Sequrity" onClick={() => navigate("sequrity")}>
                        <NavIcon>
                            <RiLock2Line />
                        </NavIcon>
                        <NavText>Security</NavText>
                    </NavItem>
                    <NavItem eventKey="wallet" onClick={() => navigate("wallet")}>
                        <NavIcon>
                            <IoWalletOutline />
                        </NavIcon>
                        <NavText>Wallet</NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </>
    )
}
export default LeftSide;