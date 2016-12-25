require.context('./img', true, /\.?/);

import { render } from 'react-dom';
import React from 'react';
import {Carousel} from 'react-image-carousel';

let images = [
	'/img/landing1.jpg',
	'/img/landing2.jpg',
	'/img/landing3.jpg',
	'/img/landing4.jpg',
	'/img/landing5.jpg'
];



render(<div className="my-carousel">
			<Carousel images={images} 
						thumb={true}
						loop={true}
						autoplay={3000}/>
		</div>, document.getElementById("app"))


if(module.hot){
	module.hot.accept();
}
