define(['react', 'ui/panel/panel'], function(React, Panel){
	'use strict';
	return function(name){
		React.render(<Panel title="Hello controller">
						<h1>Hello, {name}!</h1>
					 </Panel>, document.body);
	};
});