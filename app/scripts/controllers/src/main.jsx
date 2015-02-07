define(['react', 'ui/panel/panel'], function(React, Panel){
	'use strict';
	return function(){
		React.render(<Panel title="Main controller">
						<h1>Hello, world</h1>
					 </Panel>, document.body);
	};
});