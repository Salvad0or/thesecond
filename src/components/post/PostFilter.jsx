import React from 'react'
import MySelect from './UI/Select/MySelect'
import MyInput from './UI/Inputs/MyInput'


const PostFilter = ({filter,setFilter}) => {

    return (
        <div> 
            
            <MyInput
            value={filter.query}
            onChange={e => setFilter({...filter, query : e.target.value})}
            placeholder="Поиск"
        />

         <MySelect
             defaultValue={'Сортировка'}
             value={filter.sort}
             onChange={e => setFilter({...filter, sort : e})}
             options={
                 [
                     { value: 'title', name: 'По названию' },
                     { value: 'description', name: 'По описанию' }
                 ]}
         />
            


        </div>
    )
}

export default PostFilter