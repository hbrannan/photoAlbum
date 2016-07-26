class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			formPlaceholder: 'Submit your content!',
			currentFish: this.props.data[0],
			rating: this.props.data[0].rating,

		}
	}

	onNameClick (fish) {
		this.setState({currentFish: fish});
	}

	onRatingChange (rating) {
		this.setState({rating: rating.target.value});
	}
	submitForm (event){
		//get the fromVal from the event e.target.value;
		var formVal = event.target[0].value;
		event.preventDefault(); // doesn't appear functional
		$.ajax({
			type: 'POST',
			url: '/photos',
			data: formVal,
			success: function (postedPhoto){
				//update your state: keep the photos in the state.
				console.log('made post', postedPhoto); 
			},
			error: function(err) {
				console.log('error saving form' + err);
			}
		  });
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
			  <form onSubmit={this.submitForm}>
			  	<input type="text" placeholder={this.state.formPlaceholder}/>
			  </form>
			</div>
		);
	};
}


window.App = App;