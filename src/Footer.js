import React from 'react';

class Footer extends React.Component{
	constructor(props) {
		super(props);
		this.getActiveStyle.bind(this);
		this.getFooterStyle.bind(this);
		this.changeCurrent.bind(this);		
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
		this.props.setCurrent(e.target.getAttribute("id"));
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
  images: React.PropTypes.array.isRequired,
  thumb: React.PropTypes.bool,
  currentId: React.PropTypes.number,
  setCurrent: React.PropTypes.func
};

export {Footer};
