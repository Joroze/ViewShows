import './HomePage.css';

import { connect } from 'react-redux';
import { lifecycle } from 'recompose'
import React from 'react';
import * as R from 'ramda';

import FilmCarousel from 'components/FilmCarousel/FilmCarousel';
import { getFilmsDispatch } from 'ducks/FilmsLibrary.duck.js';

function HomePage(props) {
    const { filmsLibrary } = props;
    const { filmData, isLoading } = filmsLibrary;
    const filmList = R.propOr([], 'film')(filmData);

    return (
        <div className='component-home-page'>
            { !isLoading
                ? ( 
                    <React.Fragment>
                        <FilmCarousel items={filmList}/>
                        <FilmCarousel items={filmList}/>
                        <FilmCarousel items={filmList}/>
                        <FilmCarousel items={filmList}/>
                        <FilmCarousel items={filmList}/>
                    </React.Fragment>
                )
                : <h2 className='text-center'>Loading featured films...</h2>
            }
        </div>
    );
}

const component = lifecycle({
    componentDidMount() {
        const { filmsLibrary, getFilms } = this.props

        if (filmsLibrary.ajaxCompletedSuccessfully === false) {
            getFilms(10);   
        }
    }
  })(HomePage);

function mapStateToProps(state) {
    return {
        filmsLibrary: state.filmsLibrary
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getFilms: (limit) => dispatch(getFilmsDispatch(limit))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);