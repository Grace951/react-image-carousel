import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component{
	constructor(props) {
		super(props);
		this.getActiveStyle = this.getActiveStyle.bind(this);
		this.getFooterStyle = this.getFooterStyle.bind(this);
		this.changeCurrent = this.changeCurrent.bind(this);		
	}
	getActiveStyle(id){
		let s = {
			opacity: (id === this.props.currentId)?1:.5
		};
		if (this.props.thumb){
			s.backgroundImage = `url( ${this.props.images[id]})`;
		}
		return s;
	}
	getFooterStyle(){
		let s = {};
		if (!this.props.thumb){
			s.height = "30px";
		}
		return s;
	}
	changeCurrent(e){
		let id = parseInt(e.target.getAttribute("data-id"));
		this.props.setCurrent(id);
	}
	render(){
		let footerClass= this.props.thumb?"carousel-thumb":"carousel-dot";
		return (
			<div className="carousel-footer" style={this.getFooterStyle()}>
				<div className="box">
				{
					this.props.images.map((item, id) => (<div className={footerClass} key={id} data-id={id} style={this.getActiveStyle(id)} onClick={this.changeCurrent} />))
				}
				</div>
			</div>
		);
	}
}
Footer.propTypes = {
  images: PropTypes.array.isRequired,
  thumb: PropTypes.bool,
  currentId: PropTypes.number,
  setCurrent: PropTypes.func.isRequired
};

export {Footer};
