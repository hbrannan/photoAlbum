class App extends React.Component {
	constructor (props) {
		super(props);
		// this.state = {
		// 	currentFish: this.props.data[0];
		// }
	}

	onNameClick (fish) {
		//make sure to pass this down
		// update state here: to show details/ title
		//*current fish*
		///to update in display
	}

	render () {
		return (
			<div>
			    {/*BIND THIS HERE so lookup will run all the way back to App correctly*/}
				{this.props.data.map(fish => <PhotoRow fish={fish} handleNameClick={this.onNameClick.bind(this)} />)}
			</div>
		);
	};

}


window.App = App;
				//here instantiate subViews
				//set their props and pass down function/events/listeners via props



				//{this.props.data.map(photo => <PhotoRow photo={photo} handlePhotoClick={this.handlePhotoClick.bind(this)}/>)}