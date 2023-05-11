import React from 'react'
import style from './ModalWindow.module.css'

const ModalWindow = ({children, visible, setVisible}) => {

    const rootClasses = [style.myModal]; // добавляем стили в константу
    if(visible){
        rootClasses.push(style.active);
    }

  return (
    <div className={rootClasses.join(' ')} 
        onClick={e => setVisible(false) /* При нажатии на темную сторону окно закроется */}> 
        <div className={style.myModalContent}
        onClick={e => e.stopPropagation()/* При нажатии на cветлую сторону окно НЕ закроется */ }>
            {children}
        </div>

    </div>
  )
}

export default ModalWindow