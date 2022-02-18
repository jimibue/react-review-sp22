import {useState} from 'react'
import { getAlphabet } from './helpers'
const MessageBasic = ()=>{
 
    // useState function, if this confusing 
    // spend sometime reading up on useState
    const [message, setMessage] = useState('')

    const handleClicked = (char) => {
        setMessage(message + char)
    }

    const renderKeyboard = ()=>{
        // get ['a','b'..'z'] and store to alp
        let alp = getAlphabet()
        
        // mapping over that alp array
        // for each thing I am return this
        //button key={char} onClick={()=> handleClicked(char)}>{char}</button>
        // char is the current letter 'a' then 'b' then 'c' etc
        let jsx = alp.map(char=>{
            return  <button key={char} onClick={()=> handleClicked(char)}>{char}</button>
        })
        return jsx
    }

    return (
       <div>
           <p>{message}</p>
           {renderKeyboard()}
       </div> 
    )
}

export default MessageBasic