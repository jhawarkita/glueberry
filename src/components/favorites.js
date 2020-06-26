import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

class Favorites extends React.Component {
	constructor(props) {
		super(props);
		this.loadProduct = this.loadProduct.bind(this);
		this.state = {
			categoryProducts: [],
		};
	}

	componentWillMount() {
		getProductsByCategory(this.props.selectedCategory)
			.then((data) => this.setState({ categoryProducts: data }))
			.catch((err) => console.log('rejected promise, due to err:', err));
	}
	loadProduct(item) {
		console.log('&&7', item['_id']);
		this.props.dispatch(getSelectedProduct(item['_id'], this.props.history));
	}
	
	render() {
		return <div>
		{this.state.categoryProducts && (
			<Grid container spacing={4} style={{ padding: '20px' }}>
				{this.state.categoryProducts.map((item) => (
					<Grid item xs={6} sm={4} md={3}>
						<Paper>
							<CardLayout
								id={item['_id']}
								image={item['Image']}
								title={item['Title']}
								price={item['Price']}
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
	</div>;
	}
}

export default Favorites;
