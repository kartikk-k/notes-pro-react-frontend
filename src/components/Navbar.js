import React from 'react'
import '../styling/navbar.css'
import SearchIcon from '../Assets/Icons/SearchIcon.svg'
import AccountIcon from '../Assets/Icons/AccountIcon.svg'

const Navbar = ({ isOpen }) => {
    let screenWidth = window.innerWidth
    return (
        <div className='Navbar'>
            <div className="left">
                {!isOpen && (
                    <p className="logo">NP</p>
                )}
                <div className="searchbar">
                    <img src={SearchIcon} alt="" />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className="right">
                <img src={AccountIcon} alt="" />
                {screenWidth >= 600 && (
                    <div className="account-details">
                        <p id='user-name'>Kartik</p>
                        <p>Developer</p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar