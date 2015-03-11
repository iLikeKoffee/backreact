define(['react', 'react.backbone'],
function(React){
  var EditableListItem = React.createBackboneClass({
    onView: function(e){
      e.preventDefault();
      if(this.props.onViewAction){
        this.props.onViewAction(this.getModel());
      }
    },
    onEdit: function (e) {
      e.preventDefault();
      if(this.props.onEditAction){
        this.props.onEditAction(this.getModel());
      }
    },
    onRemove: function(e) {
      e.preventDefault();
      if(this.props.onRemoveAction){
        this.props.onRemoveAction(this.getModel());
      }
    },
    render: function() {
      var model = this.getModel();
      return (
        <div className="list-group-item">
          <span className="model-string">
            <a href="#" onClick={this.onView}>{model.toString()}</a>
          </span>
          <div className="pull-right controls">
            <a href="#" className="glyphicon glyphicon-pencil" onClick={this.onEdit}/>
            <a href="#" className="glyphicon glyphicon-remove" onClick={this.onRemove}/>
          </div>
        </div>);
    }
  });

  return EditableListItem;
});