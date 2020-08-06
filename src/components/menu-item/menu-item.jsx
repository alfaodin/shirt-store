import React from 'react'
import { withRouter } from 'react-router-dom';

import './menu-item.scss'

/**
 * 
 * @param title: 'hats',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 1,
					linkUrl: 'shop/hats'
					param0 
 */
const MenuItem = ({ data, history, match }) => (
	<div className={`${data?.size} menu-item`} onClick={() => {
		console.log(`prueba ${match.url}`);
		history.push(`${match.url}${data.linkUrl}`);
	}}>
		<div className="background-image" style={{
			backgroundImage: `url(${data.imageUrl})`
		}}>
		</div>
		<div className="content">
			<h1 className="title">{data.title}</h1>
			<span className="subtitle">Shop now</span>
		</div>
	</div >
);

export default withRouter(MenuItem);
