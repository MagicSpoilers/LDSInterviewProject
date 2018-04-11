function Card(props) {
	return (
		<div className="card-container">
			<div id={props.id} className={props.revealedClass + " psychic-card"} onClick={props.onClick  ? props.onClick : undefined}>
				<div className="double-sided">
					<face className="front">
						{props.value}
					</face>
					<face className="back">
						{props.value}
					</face>
				</div>
			</div>
		</div>
	);
}

class ImageGallery extends React.Component {		
	constructor(props) {
		super(props);
		this.state = {
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg',
        'https://cdn.cnn.com/cnnnext/dam/assets/170407220916-04-iconic-mountains-matterhorn-restricted.jpg'
      ],
			selectedImage: 'my test is cool'
		};
	}
	
	selectImage (imageLocation) {
		this.state.selectedImage = imageLocation;
		this.forceUpdate();
	}

	render() {
		return (
			<div className="view-panel">
        Hello world pickle {this.state.selectedImage}
      </div>
		);
	}
}

// ========================================

ReactDOM.render(
	<div>
		<ImageGallery />
	</div>,
	document.getElementById('image-gallery')
);