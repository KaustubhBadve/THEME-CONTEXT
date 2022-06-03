import React from 'react'
import style from "./navbar.module.css"
const Forms = () => {
  return (
    <div>
        <form>
            <label >
                Name : 
                <input type="text"  placeholder='Enter Name...'/>
            </label>
           <br /><br />
           <label htmlFor="">
               Email : 
               <input type="text" placeholder='Enter Email Address ...' />
           </label>
           <br /><br />
           <label htmlFor="">
               Password : 
           <input type="text" placeholder='Enter Password'/>
           </label>
           <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Forms