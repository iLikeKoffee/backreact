define(['react'], function(React){
  var FormPanel = React.createClass({
    render: function() {
      return (
            <div className="form-panel">
              {this.props.children}
            </div>
      );
    }
  });

  return FormPanel;
});