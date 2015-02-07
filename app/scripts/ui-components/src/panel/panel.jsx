define(['react'], function(React){
	'use strict';
	var Panel = React.createClass({
	render: function(){
		return <div className="panel panel-default">
			<div className="panel-heading">
				<h1>{this.props.title}</h1>
			</div>
			<div className="panel-body">
				{this.props.children}
				<ul>
          <li> <a href="#/hello/Name"> Hello, Name example </a></li>
          <li> <a href="#/hello/Name/"> Hello, Name example with trailing slash </a></li>
          <li> <a href="#"> Main controller </a></li>
          <li> <a href="#/abracadabra"> Unexisting one </a></li>
				</ul>
			</div>
		</div>;
		}
	});

	return Panel;
	
});