import React from 'react';

const Character = ({ gender, image, name, species, status, type }) => {
    return (
        <article className="card">
            <div className="card-header">
                <img src={image} alt={name} />
                <div className="card-header-category">{status}</div>
            </div>
            <div className="card-body">
                <h1>{name}</h1>
                <div className="card-body-badge">
                    <p>
                        Especie <br /> <span>{species}</span>
                    </p>
                    <p>
                        Genero <br /> <span>{gender}</span>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Character;
