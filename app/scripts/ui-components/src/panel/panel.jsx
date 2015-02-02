define(['react'], function(React){
	var Panel = React.createClass({
	render: function(){
		return <div className="panel panel-default">
			<div className="panel-heading">
				<h1>{this.props.title}</h1>
			</div>
			<div className="panel-body">
				{this.props.children}
			</div>
		</div>;
		}
	});

	return Panel;
	
});