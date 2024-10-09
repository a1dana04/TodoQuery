"use client"
import { useGetTodosQuery } from '@/redux/api/todo';
import { log } from 'console';
import React from 'react';

const TodoList = () => {
    const {data} = useGetTodosQuery()
    console.log(data, 'FGHJKGHVJBK');
    
    
    return (
        <div>
          
            <div className='container'>
                {
                    data?.map((item,index)=>(
                        <div key={index}>
                           
                           <div className=' flex  gap-4 ml-32t'>
                           
                           <h5 className='font-extrabold text-2xl' > title:{item.title}</h5>
                           <p className='font-extrabold text-xl'>descr:{item.description}</p>
                           </div>
                          

                        </div>
                    ))
                }
            </div>
            
        </div>
    );
};

export default TodoList;