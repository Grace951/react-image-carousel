'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Footer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
	_inherits(Footer, _React$Component);

	function Footer(props) {
		_classCallCheck(this, Footer);

		var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

		_this.getActiveStyle = _this.getActiveStyle.bind(_this);
		_this.getFooterStyle = _this.getFooterStyle.bind(_this);
		_this.changeCurrent = _this.changeCurrent.bind(_this);
		return _this;
	}

	_createClass(Footer, [{
		key: 'getActiveStyle',
		value: function getActiveStyle(id) {
			var s = {
				opacity: id === this.props.currentId ? 1 : .5
			};
			if (this.props.thumb) {
				s.backgroundImage = 'url( ' + this.props.images[id] + ')';
			}
			return s;
		}
	}, {
		key: 'getFooterStyle',
		value: function getFooterStyle() {
			var s = {};
			if (!this.props.thumb) {
				s.height = "30px";
			}
			return s;
		}
	}, {
		key: 'changeCurrent',
		value: function changeCurrent(e) {
			var id = parseInt(e.target.getAttribute("data-id"));
			this.props.setCurrent(id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var footerClass = this.props.thumb ? "carousel-thumb" : "carousel-dot";
			return _react2.default.createElement(
				'div',
				{ className: 'carousel-footer', style: this.getFooterStyle() },
				_react2.default.createElement(
					'div',
					{ className: 'box' },
					this.props.images.map(function (item, id) {
						return _react2.default.createElement('div', { className: footerClass, key: id, 'data-id': id, style: _this2.getActiveStyle(id), onClick: _this2.changeCurrent });
					})
				)
			);
		}
	}]);

	return Footer;
}(_react2.default.Component);

Footer.propTypes = {
	images: _propTypes2.default.array.isRequired,
	thumb: _propTypes2.default.bool,
	currentId: _propTypes2.default.number,
	setCurrent: _propTypes2.default.func.isRequired
};

exports.Footer = Footer;