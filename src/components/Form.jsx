function Form (props){

    return(
        <>
            <input type="text" className={props.} placeholder={props.placeholder}/>
            <button className={"add-task-btn js-btn-add"}>{props.button}</button>
        </>
    )
}
export default Form;