var images = [
	'/img/landing1.jpg',
	'/img/landing2.jpg',
	'/img/landing3.jpg',
	'/img/landing4.jpg',
	'/img/landing5.jpg'
];


ReactDOM.render((<div className="my-carousel">
			<Carousel images={images} thumb={true} loop={true} autoplay={3000}/>
		</div>), document.getElementById("content"));
