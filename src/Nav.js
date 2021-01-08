import React, { useState, useEffect } from 'react'
import './Nav.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import LanguageIcon from '@material-ui/icons/Language';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';


function Nav() {

    const state = {
        drawerOpen: false,
        headerShow: false
    };

    const toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    };


    const [show, handleShow] = useState();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                handleShow(true);
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`} >
            <img
                className="nav__logo"
                src="https://fontmeme.com/permalink/210101/8e90536ead72ac18e81d2f9befd22524.png"
                alt="Flex-TV Logo"
            />

            <NotificationsIcon className="nav__icon" />
            <LanguageIcon className="nav__iconWorld" />
            <FormatListBulletedIcon className="nav__iconList" />
            <FormatListBulletedIcon />

            <img
                className="nav__avatar"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="Flex-TV Avatar"
            />


        </div >
    )
}

export default Nav
