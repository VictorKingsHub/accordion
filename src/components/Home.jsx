import React, { useState } from 'react'
import data from "./data"
import "./styles.css"

function Home() {
    const [selected, setSelected] = useState(false)



    const handleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    console.log(selected)

    return (
        <div className='wrapper'>
            <div className="name">Simple Accordion</div>
            {data && data.length > 0 ?
                data.map((list) => {
                    return (
                        <div key={list.id}>
                            <div className="question"
                                onClick={() => handleSelection(list.id)}>
                                <div> {list.question} </div>
                                <div> + </div>
                            </div>
                            <div className="answer">
                                { selected === list.id && (
                                        list.answer
                                    )
                                }
                            </div>
                        </div>
                    )
                }) :
                <div>{null}</div>
            }
        </div>
    )
}

export default Home
