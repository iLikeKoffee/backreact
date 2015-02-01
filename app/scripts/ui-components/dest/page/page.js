define(['react', 'ui/navbar/navbar'], function(React, Navbar) {
    return React.createClass({
      render: function (){
        return React.createElement("div", null, 
                  React.createElement(Navbar, {name: this.props.name}), 
                  React.createElement("div", {className: "container page"}, 
                    React.createElement("div", {className: "row"}, 
                      this.props.children
                    )
                  )
               )
      }
    });
})
