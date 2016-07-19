const PhotoRow = (props) => {
    return (
    	<tr>
    		<td className="photo">
    		    <div>
                    {/*CLICK HERE (on title) wrap in anon. func so not immed. executed!*/}
                  <span onClick={()=>props.handleNameClick({props})}>
                    <img src={this.props.name}/>
                  </span>
    		    </div>
    		</td>
    	</tr>
    );
};

window.PhotoRow = PhotoRow;
        			// 
