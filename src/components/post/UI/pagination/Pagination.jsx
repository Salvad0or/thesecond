import React from 'react'
import { getPagesArray } from '../../utils/pages';
import MainButton from '../Buttons/MainButton';

const Pagination = ({ totalPages, page, changePage }) => {


    let pagesArray = getPagesArray(totalPages);

    return (
        <div>
            {
                pagesArray.map(p =>


                    <MainButton
                        onClick={() => changePage(p)}>{p}</MainButton>

                )
            }
        </div>
    )
}

export default Pagination