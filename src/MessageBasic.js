import {useState} from 'react'
const MessageBasic = ()=>{
 
    const [message, setMessage] = useState('')
    const handleClicked = (char) => {
        console.log(`${char} clicked`)
        setMessage(message + char)
    }
    
    const renderAlphabet = ()=>{
        let alp = ['a','b','c'] //=> <p key='1'>a</p>,<p key='2'>b</p>,<p key='3'>c</p>]
        let jsx = alp.map(char=>{
            return  <button key={char} onClick={()=> handleClicked(char)}>{char}</button>
        })
        return jsx
    }

    return (
       <div>
           <h1>MessageBasic</h1>
           <p>{message}</p>
           {renderAlphabet()}
       </div> 
    )
}

export default MessageBasic