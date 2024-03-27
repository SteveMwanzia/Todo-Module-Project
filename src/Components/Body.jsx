import React from 'react'
import { useState } from 'react'
import Items from './Items'
import App from '../App'


const Body = ({todos,deleteHandler,updateStatus,addHandler,setTodos,rendertodo}) => {
    const [filter, setFilter] = useState('all')

     // Function to update filter value 
    const setFilterValue = (value) => setFilter(value)

    //  Function to delete completed items
    const clearCompletedTodos = () => {
        const todoItems = todos.filter(todo => !todo.complete)
        setTodos(todoItems)
    }

    // function to get number of displayed items
    const getnum = () => {
        if(filter === 'all') {
            return todos.length
        } else if (filter === 'active') {
            return todos.filter(todo => !todo.complete).length
        } else if (filter === 'complete') {
            return todos.filter(todo => todo.complete).length
        }

        return 0;
    }


    //   // Fuction to render todo based on filver value
    const renderTodos = () => {
        let filteredList;
        if(filter === 'all') {
        filteredList = todos;
        } else if (filter === 'active') {
        filteredList = todos.filter(todo => !todo.complete)
        } else if(filter === 'complete') {
        filteredList = todos.filter(todo => todo.complete)
        }

        return filteredList.map(todo => (
        <Items key={todo.id} data={todo} deleteHandler={deleteHandler} updateStatus={updateStatus}/>
        ))
    }
    
    

    const filterContainer = {
        backgroundColor:'#fff',
        height:'70px',
        borderRadius:'10px 10px 0 0',
        width:'700px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:"50px",
        // borderBottom:''
        
    }

    const buttonstyle = {
        backgroundColor:'#fff',
        height:'70px',
        borderRadius:'0px 0px 12px 12px',
        width:'700px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        color:'#9495a5',
        fontWeight:'700',
        padding:' 0 30px'
        

    }

  return (
    <div style={{backgroundColor:'#f2f2f2',width:'100%',height:'80vh',fontFamily:'Poppins',
                display:'flex', justifyContent:'column',position:'relative',gap:'50px'}}>
        <div style={{display:'flex',justifyContent:'center',alignSelf:'center',position:'absolute',top:'-25px',width:'100%'}}>
            <div>
                <div style={filterContainer}>
                    <button onClick={() => setFilterValue('all')} type='button' className='focus:font-bold'>All</button>
                    <button onClick={() => setFilterValue('active')} type='button' className='focus:font-bold'>Active</button>
                    <button onClick={() => setFilterValue('complete')} type='button' className='focus:font-bold'>Completed</button>
                </div>
                
                {/* {todos.map((todo => <Items key={todo.Id} data={todo} deleteHandler={deleteHandler} updateStatus={updateStatus} />))} */}
                {todos && renderTodos()}

                <div className='border-t-2 border-solid border-black' style={buttonstyle}>
                    <p>{getnum()}</p>
                    <button onClick={clearCompletedTodos} style={{border:'none',backgroundColor:'#fff',color:'#9495a5',fontWeight:'700' }}>Clear Completed</button>
                </div>
            </div>

        </div>



        

        

        
        
    </div>
   
    

    


  )
}

export default Body