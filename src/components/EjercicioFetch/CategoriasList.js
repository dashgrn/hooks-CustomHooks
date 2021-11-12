import React from 'react'
import Cards from './Cards'

const CategoriasList = ({ categorias }) => {
    return (
        <div>
            {
                categorias.map((cate, index) => {
                    return (
                        <Cards categoria={cate} key={index}/>
                        // <div key={index} >
                        //     <h1>{cate}</h1>
                        //     <Cards categoria={cate} />
                        // </div>
                    )
                })
            }
            <Cards />
        </div>
    )
}

export default CategoriasList