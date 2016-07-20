class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			currentFish: this.props.data[0]
		}
	}

	onNameClick (fish) {
		this.setState({currentFish: fish});
		///to update in display
		//make sure to pass this down
		// console.log(fish))
	}

	render () {
		return (
			<div> 
			  <table>
			    <tbody>
				{this.props.data.map((fish, key) => <PhotoRow key={key} fish={fish} handleNameClick={this.onNameClick.bind(this)} />)}
			    </tbody>
			  </table>
			  <Display currentFish={this.state.currentFish}/>
			</div>
		);
	};
}


window.App = App;
				//here instantiate subViews
				//set their props and pass down function/events/listeners via props



				//{this.props.data.map(photo => <PhotoRow photo={photo} handlePhotoClick={this.handlePhotoClick.bind(this)}/>)}