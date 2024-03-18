import Square from "../button/square"
import { useState } from "react"

function winner(xo){
    const winner = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6],
    ]
    for(let win of winner){
     if(xo[win[0]] && xo[win[0]] === xo[win[1]] && xo[win[0]] === xo[win[2]])
         return xo[win[0]]
    }
    return null
 }


function Carre({xo,pair,setting}){
    let [moves,setmoves] =useState("next palyer X");
    function setvaleu(i){
        let value = xo.slice()
        if(!value[i]){
        if (pair % 2 === 0){
            value[i] = 'X'
            let win = winner(value)
            if (win)
                setmoves("winner is X")
            else
                setmoves("next player is O")
        }
        else if(pair % 2 !== 0){
            value[i] = 'O'
            if(winner(value))
                setmoves("winner is o")
            else
                setmoves("next player is X")
        }
        setting(value)
        }
        else
            return
    } 
    
    return(

        <div className='App'>
            <h3>{moves}</h3>
            <div className='board-row'>
                <Square value = {xo[0]} fun = {setvaleu} index={0} />
                <Square value = {xo[1]} fun = {setvaleu} index={1}/>
                <Square value = {xo[2]} fun = {setvaleu} index={2}/>
            </div>
            <div className='board-row'>
                <Square value = {xo[3]} fun ={setvaleu} index={3} />
                <Square value = {xo[4]} fun ={setvaleu} index={4}/>
                <Square value = {xo[5]} fun ={setvaleu} index={5}/>
            </div>
            <div className='board-row'>
                <Square value = {xo[6]} fun ={setvaleu} index={6}/>
                <Square value = {xo[7]} fun ={setvaleu} index={7}/>                
                <Square value = {xo[8]} fun ={setvaleu} index={8}/>
            </div>
        </div>
    )
}
function Game (){
    let [pair,setpair] = useState(0)
    let [history,sethistory] = useState([Array(9)])
    let lastest = history[history.length-1]
    function onset(etat){
        let j = pair
        j++
        setpair(j)
        let clone = history
        clone.push(etat)
        sethistory(clone)
    }

    return(
        <div>
            <Carre xo={lastest} pair ={pair} setting ={onset} />
        </div>
    )
}
export default Game



