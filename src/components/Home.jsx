import React, { useState } from 'react'
import data from './data'
import "./styles.css"

function Home() {

    const [selected, setSelected] = useState(false)

    const checkSeleccted = (accordionId) => {
        setSelected(accordionId)
    }

  return (
    <div className='wrapper'>

      {data && data.length > 0 ? 
        <div> {
            data.map((list) => {
                return (
                    <div className='accordion' key={list.id} onClick={()=>checkSeleccted(list.id)}>
                        <div className='question'>{list.question}</div>
                        <div className='question'>+</div> 
                        <div className="answer">  
                            {selected === list.id ?
                             list.answer : null 
                            }
                        </div>
                    </div>
                )
            })
            } </div>
        : <div>{null}</div>  
    }
    </div>
  )
}

export default Home
