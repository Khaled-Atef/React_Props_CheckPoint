const Handlename = (props)=>{
    const x = ()=>{
        return(props.y("Khaled Atef"));
    }
    return(
        <div>
             
            <button onClick={x} >
              click here
            </button>
              
        </div>
    )
}

export default Handlename ;

