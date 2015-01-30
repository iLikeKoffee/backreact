define(['react'], function(React) {
    return React.createClass({
    	render: function (){
    		return <nav className="menu" >Hello, {this.props.name}!</nav>;
    	}
    });
})

