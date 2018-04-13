class ImageGallery extends React.Component {		
	constructor(props) {
		super(props);
		this.state = {
			images: [
			{
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
				}
			],
			selectedImage: {}
		};
		this.state.selectedImage = this.state.images[this.state.images.length - 1];
	}

	selectImage (imageObject) {
		this.setState({selectedImage: imageObject});
	}

	handleImageLoaded(imageObject) {
		imageObject.loaded = true;
		this.forceUpdate();
	}

	render() {
		return (
			<div>
				<div className={this.state.selectedImage.loaded ? "view-panel row" : "view-panel placeholder row"}>
					<img className={this.state.selectedImage.loaded ? "selected-image" : "hidden"} 
					src={this.state.selectedImage.src}
					onLoad={() => this.handleImageLoaded(this.state.selectedImage)}/>
					<div className={this.state.selectedImage.loaded ? "" : "loader"}></div>
				</div>
				<div className="row">
					<div className="media-meta col-md-1">
						<div className="media-title">{this.state.selectedImage.title}</div>
						<div className="media-description">{this.state.selectedImage.description}</div>
					</div>
					<div className="image-selections col-md-2">
						{this.state.images.map((imageObject, i) => {
							return <div className={this.state.selectedImage.loaded ? "image-single" : "image-single placeholder"} key={i}>
								<img className={imageObject.loaded ? "" : "hidden"}
								src={imageObject.src} 
								onClick={() => this.selectImage(imageObject)}
								onLoad={() => this.handleImageLoaded(imageObject)}/>
								<div className={imageObject.loaded ? "" : "loader"}></div>
							</div>;
						})}
					</div>
				</div>
			</div>
		);
	}
}

class VideoPane extends React.Component {		
	constructor(props) {
		super(props);
		this.state = {
			src: 'https://www.youtube.com/embed/uSaiX7sCDV0',
			title: 'Spiritual Dynamite',
			description: 'Invite more spiritual power into your life by combining family history with the blessings of the temple.',
			author: 'Elder Dale G. Renlund'
		};
	}

	render() {
		return (
			<div>
				<div className="video-container row">
					<iframe src={this.state.src} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
				</div>
				<div className="media-meta row">
					<div className="media-title">{this.state.title}</div>
					<div className="media-description">{this.state.description}</div>
					<div className="media-author">{this.state.author}</div>
				</div>
				<hr/>
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

ReactDOM.render(
	<div>
		<VideoPane />
	</div>,
	document.getElementById('video-pane')
);