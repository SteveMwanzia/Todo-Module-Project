import React, { useState } from 'react'
import moonImg from '../assets/Resources/icon-moon.svg'
import sunImg from '../assets/Resources/icon-sun.svg'
import headBg from '../assets/Resources/bg-desktop-light.jpg'

const Heading = ({addHandler}) => {
    const [item, setItem] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        // add item to list
        addHandler(item);
        setItem('');

    }

    // styles
    const mainContainer = {
        backgroundImage:`url(${headBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'100%',
        height:'250px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        gap:'50px',
        fontFamily:'Poppins'
    }

    const inputContainer = {
        backgroundColor:'#fff',
        height:'70px',
        borderRadius:'10px',
        width:'700px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }

    const buttonStyle = {
        backgroundColor:'#3a7cfd',
        color:'#fff',
        border:'none',
        padding:'10px 25px',
        borderRadius:'10px',
        fontWeight:'700'
    }

  return (
    <div style={mainContainer}>
        <div style={{display:'flex',justifyContent:'space-between',width:'700px'}}>
            <h1 style={{fontSize:'40px',fontWeight:'500',color:'#fff',letterSpacing:'5px'}}>TODO</h1>
            <img style={{height:'24px',weight:'24px'}}src={moonImg} alt="sun" />
        </div>

        <form onSubmit={handleSubmit} style={inputContainer}>
            <input required value={item}
             onChange={(e)=> setItem(e.target.value)}
             style={{border:'none',width:'550px',height:'30px',fontWeight:'700',}}type="text" placeholder='Create new ToDo item' />
            <button onClick={handleSubmit} style={buttonStyle}type='button' >Add</button>
        </form>
    </div>
  )
}

export default Heading