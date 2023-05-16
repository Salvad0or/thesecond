export const getPagesConunt = (totalCount, limit) => {
    // принимает общее количество элементов
    // возвращяет необходимое количество страниц

    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {

    // принимает общее количество страниц и заполняет массив

    let result = [];

    for (let index = 0; index < totalPages; index++) {
        result.push(index + 1);
        
    }
    return result;

}