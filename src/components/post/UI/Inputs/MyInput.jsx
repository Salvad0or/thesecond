import style from './MyInput.module.css'

const MyInput = (props) => {
    return(
        <input {...props} className={style.myInput}/>
    )
}

export default MyInput;