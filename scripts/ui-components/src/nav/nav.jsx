define(['react'], function(React) {
    return React.createClass({
    	render: function (){
    		return <h1>Hello, {this.props.name}!</h1>;
    	}
    });
})
