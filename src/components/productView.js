import React from 'react';
import { Card, CardMedia, Typography, Button, Grid, Paper, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';

class ProductView extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const imageObject = this.props.selectedProduct;
		return (
			<div>
				{imageObject === null ? (
					<CircularProgress
						style={{ position: 'absolute', left: '50%', right: '50%', transform: 'translate(-50%, -50%)' }}
					></CircularProgress>
				) : (
					<Paper elevation={0}>
						<Grid container justify="center" spacing={4} style={{ display: 'flex', padding: '16px' }}>
							<Grid item>
								<Card>
									<CardMedia
										image={require('../productImages/' + imageObject['Image'])}
										style={{ height: '550px', width: '450px' }}
									></CardMedia>
								</Card>
							</Grid>
							<Grid item>
								<Typography variant="h5">{imageObject['Title']}</Typography>
								<Typography variant="h4" style={{ padding: '16px' }}>
									Price {imageObject['Price']}
								</Typography>
								<Button variant="contained" color="primary" style={{ margin: '16px' }}>
									Add to Cart
								</Button>
								<Button variant="contained" color="primary" style={{ margin: '16px' }}>
									Wishlist
								</Button>
							</Grid>
						</Grid>
					</Paper>
				)}
			</div>
		);
	}
}

function mapStateToProps(state){
    return{
        selectedProduct: state.selectedProductDetails
    }
}

export default connect(mapStateToProps, null)(ProductView);
