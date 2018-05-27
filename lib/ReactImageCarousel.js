'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Footer = require('./Footer');

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Fade = function Fade(_ref) {
	var children = _ref.children,
	    props = _objectWithoutProperties(_ref, ['children']);

	return _react2.default.createElement(
		_reactTransitionGroup.CSSTransition,
		_extends({}, props, {
			timeout: { enter: 500, exit: 0 },
			classNames: 'carouselContent'
		}),
		children
	);
};

var Carousel = function (_React$Component) {
	_inherits(Carousel, _React$Component);

	function Carousel(props) {
		_classCallCheck(this, Carousel);

		var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

		_this.state = {
			currentId: 0
		};
		_this.setCurrent = _this.setCurrent.bind(_this);
		_this.addCurrent = _this.addCurrent.bind(_this);
		_this.subCurrent = _this.subCurrent.bind(_this);
		//this.getMainImgStyle = this.getMainImgStyle.bind(this);
		return _this;
	}

	_createClass(Carousel, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (this.props.autoplay > 0) {
				this._timer = setInterval(function () {
					return _this2.setCurrent(_this2.state.currentId + 1);
				}, this.props.autoplay);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this._timer) clearInterval(this._timer);
		}
		/*
  getMainImgStyle(){
  	return {
  		backgroundImage: `url( ${this.props.images[this.state.currentId]})`,
  	};
  }*/

	}, {
		key: 'addCurrent',
		value: function addCurrent() {
			this.setCurrent(this.state.currentId + 1);
		}
	}, {
		key: 'subCurrent',
		value: function subCurrent() {
			this.setCurrent(this.state.currentId - 1);
		}
	}, {
		key: 'setCurrent',
		value: function setCurrent(id) {
			var images = this.props.images || [];
			if (this.props.loop) {
				id = (id + images.length) % images.length;
			} else {
				id = id < 0 ? 0 : id >= images.length ? images.length - 1 : id;
			}
			this.setState({ currentId: id });
		}
	}, {
		key: 'render',
		value: function render() {
			var images = this.props.images || [];
			var cImage = images[this.state.currentId];
			return _react2.default.createElement(
				'div',
				{ className: 'carousel' },
				_react2.default.createElement(
					'div',
					{ className: 'carousel-main', alt: '' },
					_react2.default.createElement(
						_reactTransitionGroup.TransitionGroup,
						{ className: '' },
						_react2.default.createElement(
							Fade,
							{ key: this.state.currentId },
							_react2.default.createElement('img', { src: cImage, key: cImage })
						)
					)
				),
				_react2.default.createElement('div', { className: 'prev', onClick: this.subCurrent }),
				_react2.default.createElement('div', { className: 'next', onClick: this.addCurrent }),
				_react2.default.createElement(_Footer.Footer, { images: images, currentId: this.state.currentId, setCurrent: this.setCurrent, thumb: this.props.thumb })
			);
		}
	}]);

	return Carousel;
}(_react2.default.Component);

Carousel.propTypes = {
	images: _propTypes2.default.array.isRequired,
	thumb: _propTypes2.default.bool,
	loop: _propTypes2.default.bool,
	autoplay: _propTypes2.default.number
};

Carousel.defaultProps = {
	images: [],
	thumb: true,
	loop: true
};

exports.default = Carousel;