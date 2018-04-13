'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageGallery = function (_React$Component) {
	_inherits(ImageGallery, _React$Component);

	function ImageGallery(props) {
		_classCallCheck(this, ImageGallery);

		var _this = _possibleConstructorReturn(this, (ImageGallery.__proto__ || Object.getPrototypeOf(ImageGallery)).call(this, props));

		_this.state = {
			images: [{
				title: 'River and Rocks',
				description: "Wouldn't it be fun to swim here during the summer",
				src: 'images/photo01.jpg',
				loaded: false
			}, {
				title: 'Almost Flooded',
				description: "I really hope those houses are above the waterline",
				src: 'images/photo02.jpg',
				loaded: false
			}, {
				title: 'Snow Landscape',
				description: "It sure looks cold here. I'd prefer summer",
				src: 'images/photo03.jpg',
				loaded: false
			}, {
				title: 'Arch Bridge',
				description: "It would be amazing to jump off this thing",
				src: 'images/photo04.jpg',
				loaded: false
			}, {
				title: 'Canoe on Lake',
				description: "This would be the coolest place to camp",
				src: 'images/photo05.jpg',
				loaded: false
			}, {
				title: 'River Overview',
				description: "Not as interesting as the other pictures",
				src: 'images/photo06.jpg',
				loaded: false
			}, {
				title: 'Cable Bridge',
				description: "I'm pretty sure this is the one in San Francisco",
				src: 'images/photo07.jpg',
				loaded: false
			}, {
				title: 'Fog over There',
				description: "Is the fog rolling in or out?",
				src: 'images/photo08.jpg',
				loaded: false
			}, {
				title: 'Grass, Stream, and Mountain',
				description: "This looks like a peaceful place for a picnic",
				src: 'images/photo09.jpg',
				loaded: false
			}, {
				title: 'Paris',
				description: "I've never been here, but it sure would be fun to climb that thing",
				src: 'images/photo10.jpg'
			}],
			selectedImage: {}
		};
		_this.state.selectedImage = _this.state.images[_this.state.images.length - 1];
		return _this;
	}

	_createClass(ImageGallery, [{
		key: 'selectImage',
		value: function selectImage(imageObject) {
			this.setState({ selectedImage: imageObject });
		}
	}, {
		key: 'handleImageLoaded',
		value: function handleImageLoaded(imageObject) {
			imageObject.loaded = true;
			this.forceUpdate();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: this.state.selectedImage.loaded ? "view-panel row" : "view-panel placeholder row" },
					React.createElement('img', { className: this.state.selectedImage.loaded ? "selected-image" : "hidden",
						src: this.state.selectedImage.src,
						onLoad: function onLoad() {
							return _this2.handleImageLoaded(_this2.state.selectedImage);
						} }),
					React.createElement('div', { className: this.state.selectedImage.loaded ? "" : "loader" })
				),
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(
						'div',
						{ className: 'media-meta col-md-1' },
						React.createElement(
							'div',
							{ className: 'media-title' },
							this.state.selectedImage.title
						),
						React.createElement(
							'div',
							{ className: 'media-description' },
							this.state.selectedImage.description
						)
					),
					React.createElement(
						'div',
						{ className: 'image-selections col-md-2' },
						this.state.images.map(function (imageObject, i) {
							return React.createElement(
								'div',
								{ className: _this2.state.selectedImage.loaded ? "image-single" : "image-single placeholder", key: i },
								React.createElement('img', { className: imageObject.loaded ? "" : "hidden",
									src: imageObject.src,
									onClick: function onClick() {
										return _this2.selectImage(imageObject);
									},
									onLoad: function onLoad() {
										return _this2.handleImageLoaded(imageObject);
									} }),
								React.createElement('div', { className: imageObject.loaded ? "" : "loader" })
							);
						})
					)
				)
			);
		}
	}]);

	return ImageGallery;
}(React.Component);

var VideoPane = function (_React$Component2) {
	_inherits(VideoPane, _React$Component2);

	function VideoPane(props) {
		_classCallCheck(this, VideoPane);

		var _this3 = _possibleConstructorReturn(this, (VideoPane.__proto__ || Object.getPrototypeOf(VideoPane)).call(this, props));

		_this3.state = {
			src: 'https://www.youtube.com/embed/uSaiX7sCDV0',
			title: 'Spiritual Dynamite',
			description: 'Invite more spiritual power into your life by combining family history with the blessings of the temple.',
			author: 'Elder Dale G. Renlund'
		};
		return _this3;
	}

	_createClass(VideoPane, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'video-container row' },
					React.createElement('iframe', { src: this.state.src, frameBorder: '0', allow: 'autoplay; encrypted-media', allowFullScreen: true })
				),
				React.createElement(
					'div',
					{ className: 'media-meta row' },
					React.createElement(
						'div',
						{ className: 'media-title' },
						this.state.title
					),
					React.createElement(
						'div',
						{ className: 'media-description' },
						this.state.description
					),
					React.createElement(
						'div',
						{ className: 'media-author' },
						this.state.author
					)
				),
				React.createElement('hr', null)
			);
		}
	}]);

	return VideoPane;
}(React.Component);

// ========================================

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(ImageGallery, null)
), document.getElementById('image-gallery'));

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(VideoPane, null)
), document.getElementById('video-pane'));