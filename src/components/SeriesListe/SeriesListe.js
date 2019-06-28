import React from 'react';
// import { directive } from '@babel/types';
import { Link } from "react-router-dom";

const SeriesListItem = ({ series }) => (
    <li>
        <Link to={`/series/${series.show.id}`}>
            {series.show.name}
        </Link>
    </li>

)


const SeriesList = (props) => {
    return (
        <div>
            <ul className="series-list">
                {props.liste.map(series => (
                    <SeriesListItem series={series} key={series.show.id} />
                ))}
            </ul>

        </div>
    )
}

export default SeriesList;