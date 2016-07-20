const PhotoRow = (props) => {
    return (
    	<tr>
    		<td className="photo">
    		    <div>
                  <span onClick={()=>{props.handleNameClick(props.fish)} }>
                    <h3>{props.fish.name}</h3>
                  </span>
    		    </div>
    		</td>
    	</tr>
    );
};

window.PhotoRow = PhotoRow;
