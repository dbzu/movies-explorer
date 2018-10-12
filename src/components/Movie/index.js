import React from 'react';
import errorImg from '../../assets/error_image.png';
import PropTypes from 'prop-types';
import './style.css';


const Movie = (props) => {
    const { Title, Year, Runtime, Genre, Director, Poster } = props.movieData;
    
    return (
        <div className="col-lg-3">
            <div className="card">
                <div className="poster-container">
                    <img className="card-img-top" src={Poster} alt="Movie Poster" onError={(e)=>{e.target.onerror = null; e.target.src=errorImg}} />
                </div>
                
                <div className="card-body">
                    <h6 className="card-title"><i className="fas fa-film icon-space"></i>{Title}</h6>
                    <small><i className="fas fa-user icon-space" title="Director"></i>{Director}</small>
                    <small><i className="fas fa-calendar-alt icon-space" title="Release Year"></i>{Year}</small>
                    <small><i className="fas fa-stopwatch icon-space" title="Run Time"></i>{Runtime}</small>
                    <small><i className="fas fa-tape icon-space" title="Genre"></i>{Genre}</small>

                    <div className="modal-footer card-bottom">
                        <button className="edit-btn" onClick={ () => props.edit(props.movieData) }><i className="fas fa-edit"></i></button>
                        <button className="delete-btn" onClick={ () => props.delete(props.movieData) }><i className="fas fa-trash"></i></button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

Movie.propTypes = {
    Title: PropTypes.string,
    Year: PropTypes.number,
    Runtime: PropTypes.string,
    Genre: PropTypes.string,
    Director: PropTypes.string,
    Poster: PropTypes.string,
};

export default Movie;