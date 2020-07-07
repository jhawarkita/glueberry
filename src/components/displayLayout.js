import React from "react";
import { connect } from "react-redux";
import { Paper, Grid } from "@material-ui/core";
import { withRouter } from "react-router";
import CardLayout from "./cardLayout";
import {
  getProductsByCategory,
  getSelectedProduct,
  addToWishlist,
} from "../redux/actions";

class DisplayLayout extends React.Component {
  constructor(props) {
    super(props);
    this.loadProduct = this.loadProduct.bind(this);
    this.state = {
      categoryProducts: [],
    };
  }

  componentWillUpdate() {
    this.props.dispatch(getProductsByCategory(this.props.selectedCategory))
      /* .then((data) => this.setState({ categoryProducts: data }))
      .catch((err) => console.log("rejected promise, due to err:", err)); */
  }
  loadProduct(item) {
    console.log("&&7", item["_id"]);
    this.props.dispatch(getSelectedProduct(item["_id"], this.props.history));
  }
  render() {
    console.log("**** State category", this.props.categoryProducts, this.props.selectedCategory);
    return (
      <div>
        {this.props.categoryProducts && (
          <Grid container spacing={4} style={{ padding: "20px" }}>
            {this.props.categoryProducts.map((item) => (
              <Grid item xs={6} sm={4} md={3}>
                <Paper>
                  <CardLayout
                    id={item["_id"]}
                    image={item["Image"]}
                    title={item["Title"]}
                    price={item["Price"]}
                    fav={item["Favorite"]}
                    onClick={() => {
                      this.loadProduct(item);
                    }}
                    onClickFavorite={addToWishlist}
                  ></CardLayout>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCategory: state.selectedCategory,
    categoryProducts: state.categoryProducts,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DisplayLayout)
);
