import React from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";
import { Button, Icon, Form, TextArea } from "semantic-ui-react";
import { Flex, Box } from "rebass";

const SearchBar = changeItemValue => (
  <Form>
    <TextArea
      autoHeight
      placeholder="Movie Name"
      rows={1}
      onChange={e => changeItemValue(e.target.placeholder)}
    />
  </Form>
);

export default class MovieList extends React.Component {
  state = {
    ItemValue: ""
  };

  changeItemValue(placeholder) {
    this.setState({
      ItemValue: placeholder
    });
  }

  render() {
    return (
      <React.Fragment>
        <Flex>
          <Box p={3} width={1 / 2} color="white" bg="black">
            <Link to="/App">
              <Button icon>
                <Icon name="home" />
                Home
              </Button>
            </Link>
          </Box>
          <Box p={3} width={1 / 2} color="white" bg="black">
            <SearchBar
              ItemValue={this.state.ItemValue}
              changeItemValue={placeholder => this.changeItemValue(placeholder)}
            />
          </Box>
        </Flex>
        <div className="landing-bg">
          <div className="landing-content" />
        </div>
      </React.Fragment>
    );
  }
}
