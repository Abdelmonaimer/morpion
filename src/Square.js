


function Square(props){
    
    return (
        <button className="btn mx-1 my-1"  style={{
            fontSize: "40px",
            color:"white",
            width: "80px",
            height: "80px",
            verticalAlign: "top",
            outline: "none",
            background: "linear-gradient(180deg, rgba(106,90,150,1) 0%, rgba(106, 90, 205,1) 100%)"
          }}
     onClick={props.onClick}>{props.value}</button>
    )
}
export default Square;