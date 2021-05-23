import styled from 'styled-components'

export const Container = styled.div`
width:100%;
height:10rem;
display: flex;
flex-direction: column;
background: white;
overflow: auto;
border-radius: 0.5rem;
padding: 2rem;
-webkit-box-shadow: inset -2px 3px 11px 6px rgba(0,0,0,0.33); 
box-shadow: inset -2px 3px 11px 6px rgba(0,0,0,0.33);



`;


export const QueueList = styled.div`
width:100%;
height:10rem;
display: flex;
font-family: 'Roboto', sans-serif;
padding: 1rem;
align-items: center;
color: gray;

.queue-thumbnail{
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
}

.info-wrap{
    width: 100%;
    display: flex;
    align-items: center;
    
}

.text-container {
    margin-right: 1rem;
    
}

.delete-btn{
    cursor: pointer;


}

.delete-btn:hover{
    color: red;

}


`;