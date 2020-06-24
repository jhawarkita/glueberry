import React from 'react';
import { Card, CardMedia, CardContent, IconButton, Typography } from '@material-ui/core';
import {Favorite, Share} from "@material-ui/icons"


class CardLayout extends React.Component {
	constructor(props) {
        super(props);
        this.addToFavorites = this.addToFavorites.bind(this);
    }
    addToFavorites(id){
        console.log(id)
    }
	render() {
        const {id,image, title, price} = this.props;
		return (
			<Card>
                    <CardMedia onClick={this.props.onClick} 
                    style={{ height: '250px' }} image={require("../productImages/"+image)}></CardMedia>
				<CardContent>
					<Typography style={{ textAlign: 'center' }}>{title}</Typography>
					<Typography variant="h6"> Rs {price}</Typography>
                    <IconButton onClick={()=>{this.addToFavorites(id)}}>
                        <Favorite></Favorite>
                    </IconButton>
					<IconButton>
                        <Share></Share>
                    </IconButton>
				</CardContent>
			</Card>
		);
	}
}
export default CardLayout;
