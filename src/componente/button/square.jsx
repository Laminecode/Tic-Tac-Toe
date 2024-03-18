
function Square({value,fun,index}){
    return (
        <button className='square' onClick = {()=>{fun(index)}}>{value}</button>
    )
}

export default Square;