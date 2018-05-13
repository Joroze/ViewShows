import "./HomePage.css";

import { connect } from "react-redux";
import { lifecycle } from "recompose";
import React from "react";
import * as R from "ramda";

import Container from "components/Container/Container";
import FilmSlider from "components/FilmSlider/FilmSlider";
import Jumbotron from "components/Jumbotron/Jumbotron";

import { getFilmsDispatch } from "ducks/FilmsLibrary.duck.js";

function HomePage(props) {
  const { filmsLibrary } = props;
  const { filmData, isLoading } = filmsLibrary;
  const filmList = R.propOr([], "film")(filmData);

  return (
    <div className="component-home-page">
      <Jumbotron>
        <div>Featured Films</div>
      </Jumbotron>

      <Container>
        {filmList.length && !isLoading ? (
          <React.Fragment>
            <FilmSlider title={"Some Category"} items={filmList} />
            <FilmSlider title={"Another Category"} items={filmList} />
            <FilmSlider title={"Bob Ross Series"} items={filmList} />
            <FilmSlider title={"Classics"} items={filmList} />
            <FilmSlider title={"For Laughs"} items={filmList} />
          </React.Fragment>
        ) : (
          <h2 className="text-center">Loading featured films...</h2>
        )}
      </Container>
    </div>
  );
}

const component = lifecycle({
  componentDidMount() {
    const { filmsLibrary, getFilms } = this.props;

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
    getFilms: limit => dispatch(getFilmsDispatch(limit))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
