import style from './MainButton.module.css'

const MainButton = ({children, ...props}) =>{
    return(
        <button {...props} className={style.myBut}>
            {children}
        </button>
    )
}

export default MainButton;