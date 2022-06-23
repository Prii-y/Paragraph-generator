import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [input,setInput]=useState('');
  const [para,setPara]=useState([]);
  const [array,setArray]=useState(data);

  const filter=(number)=>{
    const newarr= array.filter((elem)=>{return array.indexOf(elem)<number});
    setPara(newarr);
    // console.log(newarr);
  };

  const inputHandler=(event)=>{
    const inputt=event.target.value;
    setInput(inputt);
   
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    filter(input);
  
    console.log(input);
    setInput('');
  };
  
  return (
 <>
   {/* <form onSubmit={submitHandler} >
     <label  htmlFor='quantity'>Enter number of paragraphs from 1 to 10</label>
     <input type='number' id='quantity' onChange={inputHandler} value={input}></input>
     <button type='submit'>Submit</button>
   </form>
    <div>{
      para.map((elem,index)=>{return(
        <div key={index}>
          <p >{elem}</p>
        </div>
      );
      })
  
    }
    </div> */}
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={submitHandler}>
        <label htmlFor='amount'>Enter no of paragraphs from 1 and 10:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={input}
          onChange={inputHandler}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {para.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
 </>
    )
}

export default App;
