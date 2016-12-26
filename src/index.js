import 'babel-polyfill';
require('./sass/main.sass');

import React from 'react';
import {Footer} from './Footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Carousel extends React.Component{
	constructor(props) {
		super(props);
		this.state ={
			currentId: 0
		};
		this.setCurrent = this.setCurrent.bind(this);
		this.addCurrent = this.addCurrent.bind(this);
		this.subCurrent = this.subCurrent.bind(this);
	}
	
	componentDidMount () {
		if (this.props.autoplay > 0){
			this._timer = setInterval( () => this.setCurrent(this.state.currentId + 1), this.props.autoplay);
		}		
	}
	componentWillUnmount () {
		if (this._timer)
			clearInterval(this._timer );
	}
	
	getMainImgStyle(){
		return {
			backgroundImage: `url( ${this.props.images[this.state.currentId]})`,
		};
	}
	addCurrent(){
		this.setCurrent( this.state.currentId + 1);
	}
	subCurrent(){
		this.setCurrent( this.state.currentId - 1);
	}
	setCurrent(id){
		let images = this.props.images || [];
		if (this.props.loop){
			id = (id < 0)	? (id + images.length) % images.length
							: id % images.length;
		}else{
			id = (id < 0)? 0: ((id >= images.length)? images.length - 1 : id);
		}
		this.setState({	currentId: id});
	}
	render(){
		let images = this.props.images || [];
		let cImage= images[this.state.currentId];
		return (
			<div className="carousel">
				<div className="carousel-main" alt="">
				<ReactCSSTransitionGroup transitionName="carouselContent" 
						transitionLeave={false}	>
					<img src={cImage} key={cImage}  />
				</ReactCSSTransitionGroup>
				</div>
				<div className="prev" onClick={this.subCurrent}/>
				<div className="next" onClick={this.addCurrent}/>
				<Footer images={images} currentId={this.state.currentId} setCurrent={this.setCurrent} thumb={this.props.thumb} />
			</div>
		);
	}
}
Carousel.propTypes = {
  images: React.PropTypes.array.isRequired,
  thumb: React.PropTypes.bool,
  loop: React.PropTypes.bool ,
  autoplay: React.PropTypes.number 
};

Carousel.defaultProps = {
  images: [],
  thumb: true,
  loop: true,
  autoplay: 3000
};



export default Carousel;
