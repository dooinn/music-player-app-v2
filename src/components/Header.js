import React, { useState, useEffect } from 'react'
import { Nav } from '../styles/HeaderElements'
import { CgMenuRound as SideBar } from 'react-icons/cg'
import { BsQuestionCircle as QuestionButton } from 'react-icons/bs'
import { AiOutlineClose as CloseButton } from 'react-icons/ai'
import SongList from './SongList'
import AddSong from './AddSong'


const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);



    function showModal() {
        return setModalOpen(!modalOpen)
    }

    return (
        <Nav>
            <SideBar
                className={modalOpen ? "nav-btn-none" : "nav-btn"}
                onClick={() => showModal()}
            />
            <h1 className="logo">JukeBoxer</h1>
            <QuestionButton style={{ opacity: 0 }} />
            <div className={modalOpen ? "modal active" : "modal"} >
                <CloseButton className="close__btn" onClick={() => showModal()} />
                <ul className="newNav-lists">
                    <AddSong />
                    <SongList />
                </ul>

            </div>
        </Nav>
    )
}

export default Header
