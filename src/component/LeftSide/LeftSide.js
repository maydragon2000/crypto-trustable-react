import React, { useState } from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiLock2Line } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import "./style.css";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const LeftSide = () => {
    const [isVisible, setIsVisible] = useState(true)
    const navigate = useNavigate();

    return (
        <>
            <SideNav expanded={isVisible} >
                <SideNav.Toggle
                    onClick={() => {
                        setIsVisible(!isVisible);
                    }}
                />

                <img className="avatar" alt="" src="/image/user.svg" />
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
                        <NavText>Sequrity</NavText>
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