const Display = (props) => (

	<div>
		<h3>{props.currentFish.name}</h3>
		<div>
		  <span>
		  <img src={props.currentFish.image}/>
		  </span>
		  <span>{props.currentFish.description}</span>
		</div>
		<div>
		  <span onClick={ ()=> {props.handleRatingChange(props.currentFish.rating)} }>
		    <h4>{props.currentFish.rating}</h4>
		  </span>
		</div>
	</div> 
); 

window.Display = Display;