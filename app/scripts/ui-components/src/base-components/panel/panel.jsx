define(['react'], function(React) {
    return React.createClass({
      getDefaultProps: function(){
        return {
          size: 12
        };
      },
      render: function() {
        return (
          <div className={"panel panel-default col-md-" + this.props.size}>
            <div className="panel-heading">
              <h1>{this.props.label}</h1>
            </div>
            <div className="panel-body">
              {this.props.children}
            </div>
          </div>);
      }
    });
});
