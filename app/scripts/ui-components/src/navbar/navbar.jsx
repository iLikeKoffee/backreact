define(['react'], function(React) {
    return React.createClass({
    	render: function (){
    		return <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                  <div className="container-fluid">
                      <div className="navbar-header">
                        <a className="navbar-brand" id="main-link" href="#/">Hello, {this.props.name}</a>
                      </div>
                      <ul className="nav navbar-nav">
                        <li><a href="#/admin" id="admin-link">Admin</a></li>
                        <li><a href="#/devpage" id="devpage-link">Devpage</a></li>
                      </ul>
                      <div className="pull-right profile-controls">
                        <a href="/#/profile/"><span className="glyphicon glyphicon-user"/> Управление профилем </a>
                        <a href="/#/logout/"><span className="glyphicon glyphicon-off"/> Выйти </a>
                      </div>
                  </div>
                </nav>;
    	}
    });
});
