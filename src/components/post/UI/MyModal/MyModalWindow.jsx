import React from 'react'
import style from './MyModalWindow.module.css'

const MyModalWindow = ({ children , isActive, setActive }) => {

    const styles = [style.MyWindow];

    if(isActive){
        styles.push(style.active)
    }



    return (
        <div className={styles.join(' ')} onClick={() => setActive(false)}>
            <div className={style.MyWindowContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModalWindow