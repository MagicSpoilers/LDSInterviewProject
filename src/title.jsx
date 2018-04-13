var player, playing = false;
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
  if(!playing){
    $("#video-pane").addClass('begun-play');
    playing = true;
  }
}

class VideoPane extends React.Component {		
	constructor(props) {
		super(props);
		this.state = {
      src: 'https://www.youtube.com/embed/jz9DVB42AA4',
      category: 'News Release',
      title: 'University of Utah Names Historic Building After President Monson',
      description: 'A historic mansion in downtown Salt Lake City has been renamed the Thomas S. Monson Center after the current president of The Church of Jesus Christ of Latter-day Saints.'
		};
	}
  
	render() {
		return (
      <div>
        <div className="video-container">
          <div id="video"></div>
        </div>
        <div className="media-meta">
          <div className="media-category">{this.state.category}</div>
          <h3 className="media-title">{this.state.title}</h3>
          <div className="media-description">{this.state.description}</div>
        </div>
      </div>
		);
	}
}

// ========================================

var RenderedVideo = ReactDOM.render(
	<div>
		<VideoPane />
	</div>,
	document.getElementById('video-pane')
);