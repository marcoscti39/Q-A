import React, {useState} from 'react'
import {BiPlus, BiMinus} from 'react-icons/bi'


function SingleQuestion({title, info}) {
    const [toggleInfo, setToggleInfo] = useState(false)
    return (
        <article className="term-article">
            <div className="term-wrapper">
                    <h2>{title}</h2> 
                <button className="more-info" onClick={() => setToggleInfo(!toggleInfo)}>

                    {toggleInfo ? <BiMinus className="icon-minus"/> : <BiPlus className="icon-plus" />}
                </button>
            </div>
            {toggleInfo && <p className="term-info"> {info} </p>}
        </article>
    )
}

export default SingleQuestion
