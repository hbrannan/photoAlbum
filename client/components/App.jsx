class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			formPlaceholder: 'Submit your content!',
			currentFish: this.props.data[0],
			rating: this.props.data[0].rating
		}
	}

	onNameClick (fish) {
		this.setState({currentFish: fish});
	}

	onRatingChange (rating) {
		this.setState({rating: rating.target.value});
	}
	clearPlaceholder (e){
		console.log(e);
		e.preventDefault();
		this.setState({formPlaceholder: ''});
	}
	submitForm (e){
				console.log(e);

		e.preventDefault();
		this.setState({formPlaceholder: 'Submit your content!'});

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
			  <form>
			  	<input type="text" placeholder={this.state.formPlaceholder} onInput={()=>this.clearPlaceholder} onSubmit={()=>this.submitForm}/>
			  </form>
			</div>
		);
	};
}


window.App = App;
				//here instantiate subViews
				//set their props and pass down function/events/listeners via props



				//{this.props.data.map(photo => <PhotoRow photo={photo} handlePhotoClick={this.handlePhotoClick.bind(this)}/>)}