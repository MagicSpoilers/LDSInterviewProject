'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var player,
    playing = false;
function onYouTubeIframeAPIReady() {
  console.log("hello wodnerful");
  player = new YT.Player('video', {
    videoId: 'jz9DVB42AA4',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  if (!playing) {
    $("#video-pane").addClass('begun-play');
    playing = true;
  }
}

var VideoPane = function (_React$Component) {
  _inherits(VideoPane, _React$Component);

  function VideoPane(props) {
    _classCallCheck(this, VideoPane);

    var _this = _possibleConstructorReturn(this, (VideoPane.__proto__ || Object.getPrototypeOf(VideoPane)).call(this, props));

    _this.state = {
      src: 'https://www.youtube.com/embed/jz9DVB42AA4',
      category: 'News Release',
      title: 'University of Utah Names Historic Building After President Monson',
      description: 'A historic mansion in downtown Salt Lake City has been renamed the Thomas S. Monson Center after the current president of The Church of Jesus Christ of Latter-day Saints.'
    };
    return _this;
  }

  _createClass(VideoPane, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'video-container' },
          React.createElement('div', { id: 'video' })
        ),
        React.createElement(
          'div',
          { className: 'media-meta' },
          React.createElement(
            'div',
            { className: 'media-category' },
            this.state.category
          ),
          React.createElement(
            'h3',
            { className: 'media-title' },
            this.state.title
          ),
          React.createElement(
            'div',
            { className: 'media-description' },
            this.state.description
          )
        )
      );
    }
  }]);

  return VideoPane;
}(React.Component);

// ========================================

var RenderedVideo = ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(VideoPane, null)
), document.getElementById('video-pane'));