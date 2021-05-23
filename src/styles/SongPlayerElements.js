import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
position: relative;


.modal {
width: 100%;
height: auto;
top: 0;
left: 0;
z-index: -2;
background: rgba(0, 0, 0, 0.9);
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: 350ms;


}

.modal.active{
top:101%;
left: 0;
transition: 350ms;
z-index: 0;
}



`;

export const PlayerContainer = styled.div`
width: 50rem;
height: 13rem;
background: white;
display: flex;
padding: 0.5rem;
font-family: 'Roboto', sans-serif;
border-radius: 0.5rem;
-webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000;

.left-container{
    flex: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1.5rem;

}

.right-container{
    flex: 30%;

}


.bottom-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.song-title{
    font-weight: bold;

}

.song-artist{
    color: gray;
}

.song-thumbnail{
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.queueList-btn{
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    cursor: pointer;
}

.queueList-btn:hover{
    background: rgba(0,0,0,0.05);
}






`;