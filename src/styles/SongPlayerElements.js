import styled from 'styled-components'

export const Container = styled.div`
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






`;