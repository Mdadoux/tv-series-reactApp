import React, { Component } from 'react';
// import { directive } from '@babel/types';
import SeriesListe from '../SeriesListe/SeriesListe';
import Loader from '../Loader/Loader';

class Series extends Component {
    state = {
        series: [],
        serieName: '',
        isFetching: false

    }
    /* une fois les éléments de la page sont rendu 
    componentDidMount() {
    }*/

    makeQuery = (query) => {
        const api = 'http://api.tvmaze.com/search/shows?q=';
        //interrogation de l'url Api
        fetch(api + query)
            .then((response) => {
                // vérifier si la réponse est ok 
                if (response.status !== 200) {
                    this.setState({ error: response.status })
                } else {

                    // si OK : traitement des données reçu
                    return response.json();
                }
            })
            .then(data => this.setState({ series: data, isFetching: false }))
            .catch(error => this.setState({ error }));

    }


    getInputValue = (e) => {
        const value = e.target.value;
        this.makeQuery(value);
        this.setState({
            serieName: value,
            isFetching: true,

        })


    }

    render() {

        const { series, serieName, isFetching } = this.state;

        return (
            <div>

                <h1>Séries</h1>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="newItemInput"
                        value={serieName}
                        placeholder='Tapez votre recherche ici'
                        onChange={this.getInputValue}
                    />


                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Serach</button>
                    </div>
                </div>

                {
                    series.length === 0 && serieName.trim !== '' &&
                    <p>Aucune série n'a été trouvé'</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesListe liste={this.state.series} />
                }





            </div>

        )
    }
}
export default Series;