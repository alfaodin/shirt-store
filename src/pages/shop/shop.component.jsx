import React, { Component } from 'react'
import SHOP_DATA from './shop.data';

export default class ShopComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { collections: SHOP_DATA };
	}

	render() {
		return (
			<div>
				SHOP PAGE
			</div>
		)
	}
}