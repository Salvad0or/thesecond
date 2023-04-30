import { useState } from "react"
import style from '../counter/style.module.css'

const Counter = (props) => {

    const[count, changeCount] = useState(1);

    const change = () => {
        changeCount(count + 1);
    }

    return(
        <div className={style.container}>
            <div>
                {count}
            </div>
            <div>
                <button onClick={change}>Изменить</button>
            </div>

        </div>
    )
}

export default Counter;