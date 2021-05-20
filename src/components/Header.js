import React from 'react'
import { Nav } from '../styles/HeaderElements'
import { CgMenuRound as SideBar } from 'react-icons/cg'
import { BsQuestionCircle as QuestionButton } from 'react-icons/bs'



const Header = () => {
    return (
        <Nav>
            <SideBar className="nav-btn" />
            <h1 className="logo">JukeBoxer</h1>
            <QuestionButton className="nav-btn" />
            <div className="modal">

            </div>
        </Nav>
    )
}

export default Header
