"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Card(props) {
	return React.createElement(
		"div",
		{ className: "card-container" },
		React.createElement(
			"div",
			{ id: props.id, className: props.revealedClass + " psychic-card", onClick: props.onClick ? props.onClick : undefined },
			React.createElement(
				"div",
				{ className: "double-sided" },
				React.createElement(
					"face",
					{ className: "front" },
					props.value
				),
				React.createElement(
					"face",
					{ className: "back" },
					props.value
				)
			)
		)
	);
}

var ImageGallery = function (_React$Component) {
	_inherits(ImageGallery, _React$Component);

	function ImageGallery(props) {
		_classCallCheck(this, ImageGallery);

		var _this = _possibleConstructorReturn(this, (ImageGallery.__proto__ || Object.getPrototypeOf(ImageGallery)).call(this, props));

		_this.state = {
			images: ['https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg', 'https://cdn.cnn.com/cnnnext/dam/assets/170407220916-04-iconic-mountains-matterhorn-restricted.jpg'],
			selectedImage: 'my test is cool'
		};
		return _this;
	}

	_createClass(ImageGallery, [{
		key: "selectImage",
		value: function selectImage(imageLocation) {
			this.state.selectedImage = imageLocation;
			this.forceUpdate();
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "view-panel" },
				"Hello world pickle ",
				this.state.selectedImage
			);
		}
	}]);

	return ImageGallery;
}(React.Component);

// ========================================

ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(ImageGallery, null)
), document.getElementById('image-gallery'));