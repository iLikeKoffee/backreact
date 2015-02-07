define(['react', 'ui/panel/panel'], function(React, Panel){
	'use strict';
	return function(){
		React.render(<Panel title="404 controller">
						<h1>There is no such route.</h1>
					 </Panel>, document.body);
	};
});