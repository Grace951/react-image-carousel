import './sass/main.sass';
import "font-awesome-sass-loader";
require("../node_modules/react-image-carousel/lib/css/main.min.css");

require.context('./img', true, /\.?/);

import { render } from 'react-dom';
import React from 'react';
import Carousel from 'react-image-carousel';

let images = [
	'img/landing1.jpg',
	'img/landing2.jpg',
	'img/landing3.jpg',
	'img/landing4.jpg',
	'img/landing5.jpg'
];

render((<div className="my-carousel">
			<Carousel images={images} 
						thumb={true}
						loop={true}
						autoplay={5000}/>
</div>), document.getElementById("app"));
