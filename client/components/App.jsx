class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			currentFish: this.props.data[0],
			rating: this.props.data[0].rating
		}
	}

	onNameClick (fish) {
		this.setState({currentFish: fish});
	}

	onRatingChange (rating) {
		console.log(rating);
		// var newRating = rating.value; 
		this.setState({rating: rating.target.value});
	}

	render () {
		return (
			<div> 
			  <table>
			    <tbody>
				{this.props.data.map((fish, key) => <PhotoRow key={key} fish={fish} handleNameClick={this.onNameClick.bind(this)} />)}
			    </tbody>
			  </table>
			  <Display currentFish={this.state.currentFish} currentRating={this.state.rating} handleRatingChange={this.onRatingChange.bind(this)}/>
			</div>
		);
	};
}


window.App = App;
				//here instantiate subViews
				//set their props and pass down function/events/listeners via props



				//{this.props.data.map(photo => <PhotoRow photo={photo} handlePhotoClick={this.handlePhotoClick.bind(this)}/>)}