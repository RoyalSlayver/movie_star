import React from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";
import { Button, Icon, Form, TextArea } from "semantic-ui-react";
import { Flex, Box } from "rebass";
import { Card } from "primereact/card";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import { connect } from "react-redux";
import createItem from "../State/Action";

const SearchBar = ({ changeItemValue, onCreateItem, ItemValue }) => (
  <Form>
    <TextArea
      autoHeight
      placeholder={"Movie Name"}
      value={ItemValue}
      rows={1}
      style={{ width: "90%" }}
      onChange={e => changeItemValue(e.target.value)}
    />
    <Button icon onClick={onCreateItem}>
      <Icon name="plus" />
    </Button>
  </Form>
);

class MovieList extends React.Component {
  state = {
    ItemValue: ""
  };

  changeItemValue(value) {
    this.setState({
      ItemValue: value
    });
  }

  PushItem() {
    this.props.createItem({
      Id: Date.now(),
      Item: this.state.ItemValue
    });
  }
  PrintOut() {
    console.log(this.state.Item);
  }

  render() {
    const header = <img alt="Card" src="/public/clack.jpg" />;
    const footer = (
      <span>
        <Button label="Favorite" icon="star" />
      </span>
    );

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
              changeItemValue={value => this.changeItemValue(value)}
              onCreateItem={() => this.PushItem()}
            />
          </Box>
        </Flex>
        <div className="landing-bg">
          <div className="landing-content">
            <Card
              title="Advanced Card"
              subTitle="Subtitle"
              style={{ width: "360px" }}
              className="ui-card-shadow"
              footer={footer}
              header={header}
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </div>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item.item
});

const mapDispatchToProps = {
  createItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
