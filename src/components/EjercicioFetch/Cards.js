import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'

const Cards = ({ categoria }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        imgGif(categoria)
            .then(imgData => setImages(imgData))
    }, [categoria])

    const imgGif = async (categoria) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=5&api_key=UYHNC2CfrY0A6094pT3TvQEwryCuW67m`
        const res = await fetch(url)
        const { data } = await res.json()

        const imgData = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return imgData
    }

    return (
        <div >
            <h2 className="text-center text-white">{categoria}</h2>
            <ol>
                {
                    images.map((img) => (
                        <li key={img.id}>
                            {/* <h3 className="text-white">{img.title}</h3> */}
                            {/* <img src={img.url} alt="imagen" /> */}

                            <Card className="m-3">
                                <Card.Img variant="top" src={img.url} />
                                <Card.Body>
                                    <Card.Subtitle>
                                        {img.title}
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Cards