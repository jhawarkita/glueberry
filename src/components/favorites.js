import React from "react";
import { Grid, Paper } from "@material-ui/core";
import CardLayout from "./cardLayout";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getAllFavs, getSelectedProduct } from "../redux/actions";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteProducts: [],
	};
	this.loadProduct = this.loadProduct.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(getAllFavs())
      /* .then((data) => this.setState({ favoriteProducts: data }))
      .catch((err) => console.log("rejected promise, due to err:", err)); */
  }

  loadProduct(item) {
	console.log('&&7', item['_id']);
	this.props.dispatch(getSelectedProduct(item['_id'], this.props.history));
}

  render() {
    console.log(this.props.favoriteProducts)
    return (
      <div>
        {this.props.favoriteProducts && (
          <Grid container spacing={4} style={{ padding: "20px" }}>
            {this.props.favoriteProducts.map((item) => (
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

function mapStateToProps(state){
 return {
  favoriteProducts:state.favoriteProducts
 }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch : (action) => {dispatch(action)}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favorites));
