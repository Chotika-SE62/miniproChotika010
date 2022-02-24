import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/PhotoList.css"

function PhotoList({ id }) {
    const [image, setImage] = useState([])
    const clientId = "8r88ONMf_N9rYKKN7TgnpFCIccTYziB1XarGZTgviNI"

    useEffect(() => {
        axios.get("https://api.unsplash.com/users/"+id+"/photos?page=1&query=&client_id="+clientId).then((response) => {
          setImage(response.data);
        })
    }, [id]);

    return (
        <Container className='containerphoto'>
            <hr/>
            <br/>
            {image.map((photo) => (
                <img className="photolist" src={photo.urls.raw} />
            ))}
        </Container>
    );
};

export default PhotoList;
