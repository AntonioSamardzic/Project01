
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Image({ image }) {


    const [button, setButton] = useState(false)



    let handleHide = (e) => {
        document.getElementById(`card ${e}`).style.display = "none";
    };

    let handleChange = () => {
        setButton(button => !button)

    };



    return (
        <div>

            <div key={image.id} id={`card ${image.id}`} className="card">
                <img className='pictures' src={image.thumbnailUrls.imedia_1024} />
                <h4 className='h4'>{image.title}</h4>
                <p>{image.authorScreenName}</p>
                <p>{image.description}</p>
                <p>{image.publishedOn}</p>
                <button class="btn btn-outline-primary" onClick={() => handleChange()} >{button ? "Pregledano" : "Nepregledano"}</button>

                <button class="btn btn-outline-danger" onClick={() => handleHide(image.id)}>Sakrij</button>
            </div>

        </div>
    )
}

export default Image
