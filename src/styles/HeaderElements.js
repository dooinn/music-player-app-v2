import styled from 'styled-components';

export const Nav = styled.nav`
width: 100vw;
height: 5rem;
background: transparent;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0rem 3rem;
position: fixed;
color: white;
top: 0;

.logo {
    font-family: 'Pattaya', sans-serif;
    font-size: 2rem;
}

.nav-btn{
    font-size: 2.5rem;
    display: flex;
    cursor:pointer;
    transition: 0.3s; 
}

.nav-btn-none{
    opacity: 0;
}

.nav-btn:hover{
    transform: scale(1.2);
}

.modal {
width: 40rem;
height: 100%;
top: 0;
left: -100%;
z-index: 999;
background: rgba(0, 0, 0, 0.3);
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: 350ms;
opacity: 0.9;
}

.modal.active{
top:0;
left: 0;
transition: 350ms;
z-index: 900;
}

.close__btn{
color:white;
font-size:2rem;
position: absolute;
top:2.7%;
left:8%;
cursor:pointer;
transition: 0.3s;
}

.close__btn:hover{
transform: scale(1.2);
}


`;