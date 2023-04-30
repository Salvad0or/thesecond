import { useState } from "react"

const Counter = (props) => {

    const[count, changeCount] = useState(1);

    const change = () => {
        changeCount(count + 1);
    }

    return(
        <div>
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