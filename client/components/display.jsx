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
		  <span>
		    <form onChange={props.handleRatingChange}>
		    	<select id="rating" defaultValue="5">
		    	  <option value="1" >1</option>
		    	  <option value="2">2</option>
		    	  <option value="3">3</option>
		    	  <option value="4">4</option>
		    	  <option value="5">5</option>
		    	</select>
		    </form>
		    <h4>Rated {props.currentRating} out of 5</h4>
		  </span>
		</div>
	</div> 
); 

window.Display = Display;