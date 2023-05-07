
const MySelect = ({ options, defaultValue, value, onChange }) => {

  
    return (
        <select 
            value = {value}
            onChange={event => onChange(event.target.value) }

        >
            <option  disabled>{defaultValue}</option>
            {
                options.map(option => 
                    <option key={option.value} value= {option.value}>
                        {option.name}
                    </option>)
            }
        </select>
    )

}

// key - для каждого элемента ключ должен быть уникальный. Подразумевается, что value и так будет для каждого уникальным
// option - это массив опций. на основании этого массива в список добавляются пункты
// event.target.value - в метод сразу прокидываем то, что выбрал пользователь

export default MySelect