import React from 'react';
import { Card, CardMedia, CardContent, IconButton, Typography } from '@material-ui/core';
import {Favorite, Share, FavoriteBorder} from "@material-ui/icons"
import { addToWishlist } from "../redux/actions";
import { connect } from "react-redux";

class CardLayout extends React.Component {
	constructor(props) {
        super(props);
        this.addToFavorites = this.addToFavorites.bind(this);
    }
    addToFavorites(id, fav){
        this.props.dispatch(addToWishlist(id, fav, this.props.selectedCategory))
        console.log(id)
    }
	render() {
        const {id,image, title, price, fav} = this.props;
		return (
			<Card>
                    <CardMedia onClick={this.props.onClick} 
                    style={{ height: '250px' }} image={require("../productImages/"+image)}></CardMedia>
				<CardContent>
					<Typography style={{ textAlign: 'center' }}>{title}</Typography>
					<Typography variant="h6" style={{ textAlign: 'center' }}> Rs {price}</Typography>
                    <IconButton onClick={()=>{this.addToFavorites(id, fav)}}>
                        { fav ? <Favorite></Favorite> : <FavoriteBorder></FavoriteBorder>}
                    </IconButton>
					<IconButton>
                        <Share></Share>
                    </IconButton>
				</CardContent>
			</Card>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch : (action) => {dispatch(action)}
    }
}
function mapStateToProps(state){
    return {
        selectedCategory: state.selectedCategory
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardLayout);
