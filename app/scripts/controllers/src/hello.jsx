define(['react', 'ui/panel/panel'], function(React, Panel){
	return function(name){
		React.render(<Panel title="Main controller">
						<h1>Hello, {name}!</h1>
					 </Panel>, document.body);
	};
});