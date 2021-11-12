import React, { useState } from 'react'
import CategoriasList from './CategoriasList'
import CategoriasAdd from './CategoriasAdd'

 const CategoriasApp = () => {

    const [categorias, setCategorias] = useState([])

    return (
        <div className="bg-dark">
            <h1>Busta GIF</h1>
            <CategoriasAdd setCategorias={setCategorias} />
            <CategoriasList categorias={categorias} />
        </div>
    )
}

export default CategoriasApp;