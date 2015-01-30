define(['react'], function(React) {
    return React.createClass({
    	render: function (){
    		return <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                  <div className="container-fluid">
                      <div className="navbar-header">
                          <a className="navbar-brand" href="#/">Hello, {this.props.name}</a>
                      </div>
                  </div>
                </nav>
    	}
    });
})
