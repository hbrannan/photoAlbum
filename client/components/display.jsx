const Display = ({fish}) => (
	<div>
		<h3>{fish.name}</h3>
		<div>
		  <span>
		  <img src={fish.image}/>
		  </span>
		  <span>{fish.description}</span>
		</div>
	</div> 
);

window.Display = Display;