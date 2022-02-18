import {useState} from 'react'
import { getAlphabet } from './helpers'
const MessageBasic = ()=>{
 
    // useState function, if this confusing 
    // spend sometime reading up on useState
    const [message, setMessage] = useState('')

    const handleClicked = (char) => {
        setMessage(message + char)
    }

    // this function creates (from getAlphabet) a arr of letters ['a','b'..'z']
    // maps over them
    // and returns [<button key={'a'} onClick={()=> handleClicked('a')}>{'a'}</button>....<button key={'z} onClick={()=> handleClicked('z')}>{z}</button>]
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

        console.log('jsx var here: about to return it', jsx)
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