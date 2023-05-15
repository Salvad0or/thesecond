import { useState } from "react"

export const useFetching = (callback,) => {

    const [isLoading, setIsLoading] = useState(false); // реализуем крутилку
    const [error,setError] = useState(''); // если ошибка произошла сюда будем помещать текст ошибки

    const fetching = async() => {
        try {
            setIsLoading(true)
            await callback();
        } catch (error) {
            
            setError(error.message)
            
        } finally{
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]


}