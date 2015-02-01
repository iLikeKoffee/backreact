define(['react'], function(React) {
    return React.createClass({
    	render: function (){
    		return React.createElement("nav", {className: "navbar navbar-default navbar-fixed-top", role: "navigation"}, 
                  React.createElement("div", {className: "container-fluid"}, 
                      React.createElement("div", {className: "navbar-header"}, 
                          React.createElement("a", {className: "navbar-brand", href: "#/"}, "Hello, ", this.props.name)
                      )
                  )
                )
    	}
    });
})
