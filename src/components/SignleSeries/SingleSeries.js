import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import { spawn } from 'child_process';
// import { directive } from '@babel/types';

class SingleSeries extends Component {

    state = {
        show: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        const api = `http://api.tvmaze.com/shows/${id}?embed=episodes`;
        //interrogation de l'url Api
        fetch(api)
            .then((response) => {
                // vérifier si la réponse est ok 
                if (response.status !== 200) {
                    this.setState({ error: response.status })
                } else {

                    // si OK : traitement des données reçu
                    return response.json();
                }
            })
            .then(data => this.setState({ show: data }))
            .catch(error => this.setState({ error }));
    }
    render() {

        const { show } = this.state;
        console.log(show);


        return (
            <div>
                {
                    show === null && <Loader />
                }
                {
                    show !== null &&
                    <div>
                        {show.image &&
                            <p><img src={show.image.medium} alt="une image" /></p>
                        }
                        <p>Titre : {show.name}</p>
                        <p>Type : {show.type}</p>
                        <p>Genre : {show.genres.map((genre, index) => (
                            <span key={index} className="badge-genre">{genre}</span>
                        )

                        )}</p>
                        <p>Année : {show.premiered.split('-')[0]}</p>
                        <p>Nombre d'épisodes' : {show._embedded.episodes.length}</p>

                    </div>
                }

            </div>



        )
    }
}

export default SingleSeries;