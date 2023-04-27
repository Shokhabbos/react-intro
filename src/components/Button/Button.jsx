const Button = (props) =>{
    // console.log(props);
    const {title, subtitle} = props
    return(
       <button>
       <span> {props.title}</span>
       <span> {subtitle}</span>
       </button>
    )
}

export default Button;