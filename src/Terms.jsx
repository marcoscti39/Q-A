import React from 'react'
import data  from './data'
import SingleQuestion from './SingleQuestion'
import './Terms.css'
function Terms() {

    return (
        <main className="term">
           <h1 className="title">questions and answers about login </h1> 
           <section className="term-section">
               {data.map(question => {
                   const {id, title, info} = question
                   return (
                       <SingleQuestion key={id} {...question}/>
                       
                   )
               })}
               

               
           </section>
        </main>
    )
}

export default Terms
