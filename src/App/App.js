import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Flex, Box } from "rebass";
import { Button, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  render() {
    return (
      <Flex>
        <Box p={3} width={1 / 2} color="white" bg="black">
          <Link to="/MovieList">
            <Button icon>
              <Icon name="list" />
              Movie List
            </Button>
          </Link>
        </Box>
        <Box p={3} width={1 / 2} color="white" bg="black">
          <Link to="/Favorite">
            <Button icon>
              <Icon name="star" />
              Favorites
            </Button>
          </Link>
        </Box>
      </Flex>
    );
  }
}

export default App;
