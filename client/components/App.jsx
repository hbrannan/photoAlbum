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
		console.log('rating is')
		console.log(rating); 
		// var num = this.state.rating;
		// num +=1;
		// this.setState({rating: num});
	}

	render () {
		return (
			<div> 
			  <table>
			    <tbody>
				{this.props.data.map((fish, key) => <PhotoRow key={key} fish={fish} handleNameClick={this.onNameClick.bind(this)} />)}
			    </tbody>
			  </table>
			  <Display currentFish={this.state.currentFish} handleRatingChange={this.onRatingChange.bind(this)}/>
			</div>
		);
	};
}


window.App = App;
				//here instantiate subViews
				//set their props and pass down function/events/listeners via props



				//{this.props.data.map(photo => <PhotoRow photo={photo} handlePhotoClick={this.handlePhotoClick.bind(this)}/>)}