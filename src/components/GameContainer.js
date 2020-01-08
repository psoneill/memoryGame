import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import PageHead from "./PageHead";
import Instructions from "./Instructions";
import Card from "./Card";
import ScoreCounter from "./ScoreCounter";
import TopScore from "./TopScore";
import GameData from "../assets/data/seedData";

class GameContainer extends Component {
  state = {
    gameData: [],
    pickedValues: [],
    currentScore: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ gameData: GameData });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleClick = event => {
    let imageClicked = event.target;
    let updGameData = this.state.gameData.sort(() => Math.random() - 0.5);

    if (this.state.pickedValues.indexOf(imageClicked.id) > -1) {

      this.setState({ gameData: updGameData, currentScore: 0, pickedValues: [] });
    } else {
      let updatedPickedValues = this.state.pickedValues;
      updatedPickedValues.push(imageClicked.id);
      let newScore = this.state.currentScore + 1;

      this.setState({ gameData: updGameData, currentScore: newScore, pickedValues: updatedPickedValues });

      if (this.state.currentScore >= this.state.topScore) {
        this.setState({ topScore: newScore });
      }
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <PageHead customStyle={"bg-dark col-12 text-center p-3 mb-4"}>
            <h1 className="text-light">Memory Game</h1>
          </PageHead>
        </Row>
        <Row>
          <Col customStyle={"col-md-3 mx-auto"}>
            <ScoreCounter heading={"Score"} currentScore={this.state.currentScore}>
            </ScoreCounter>
          </Col>
          <Col customStyle={"col-md-3 mx-auto"}>
            <TopScore heading={"Top Score"} topScore={this.state.topScore}>
            </TopScore>
          </Col>
        </Row>
        <Row>
          <Instructions customStyle={"col-12 jumbotron text-center mb-2 mt-2"}>
          </Instructions>
        </Row>
        <Row>
          <Col customStyle={"col-md-10"}>
            <ul style={{ "listStyleType": "none" }}>
              {
                GameData.map(currImg => (
                  <li key={currImg.id}>
                    <Card>
                      <img id={currImg.id} alt="Game Pic" className="img-fluid" src={currImg.image} onClick={this.handleClick} />
                    </Card>
                  </li>
                ))
              }
            </ul>
          </Col>
        </Row>
        {/* <Row>
          <Col customStyle={"col-md-8"}>
            <Card heading={this.state.result.Title || "Search for a Movie to Begin"}>
              <MovieDetail
                title={this.state.result.Title}
                src={this.state.result.Poster}
                director={this.state.result.Director}
                genre={this.state.result.Genre}
                released={this.state.result.Released}
              />
            </Card>
          </Col>
          <Col customStyle={"col-md-4"}>
            <Card heading={"Search"}>
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default GameContainer;
