import React, { useEffect, useRef, useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'

const CategoriasAdd = ({ setCategorias }) => {

    const [search, setSearch] = useState('')
    const searchRef = useRef()

    useEffect(() => {
        searchRef.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setCategorias(categorias => [search, ...categorias])
        setSearch('')
    }

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formulario">
                    <Row>
                        <Col className="m-3" md={4}>
                        <Form.Control type="text" placeholder="Busca un GIF" name="categoria" value={search} onChange={handleOnChange} ref={searchRef} />
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </div>
    )
}

export default CategoriasAdd