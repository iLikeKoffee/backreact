define(['common/form-factory','ui/base-components/editable-list/form-panel',
        'ui/base-components/editable-list/editable-list-item','react', 'react.backbone'], 
  function(getModelForm, FormPanel, EditableListItem, React){
  'use strict';
  var EditableList = React.createBackboneClass({
    getInitialState: function (){
      /* action may be one of `list` `view` `add` or `edit` */
      return {
        action: 'list'
      };
    },
    /* Returns appropriate form, depending on model 'class' */
    getModelForm: function(){
      return getModelForm(this.getCollection().model);
    },
    /* Theese methods switch state on UI events */
    addItem: function(e){
      e.preventDefault();
      var ModelClass = this.getCollection().model;
      var item = new ModelClass({});
      this.replaceState({action: 'add', target: item});
    },
    removeItem: function(item) {
      this.getCollection().remove(item);
      if(this.props.onItemRemove){
        this.props.onItemRemove(item);
      }
    },
    editItem: function (item) {
      this.replaceState({action: 'edit', target: item});
    },
    viewItem: function (item) {
      this.replaceState({action: 'view', target: item});
    },
    /* Callbacks for model form */
    onNewItemSave: function(item){
      this.getCollection().add(item);
      if(this.props.onItemSave){
        this.props.onItemSave(item);
      }
      this.replaceState({action: 'list'});
    },
    onItemReset: function (){
      this.replaceState({action: 'list'});
    },
    onItemUpdate: function (item) {
      if(this.props.onItemSave){
        this.props.onItemSave(item);
      }
      this.replaceState({action: 'list'});
    },
    /* Rendering methods */
    renderListItem: function(s){
      return (<EditableListItem model={s} onViewAction={this.viewItem} 
              onEditAction={this.editItem} onRemoveAction={this.removeItem}/>);
    },
    renderBody: function () {
      var action = this.state.action;
      var Form = this.getModelForm(); 
      if(action === 'list'){
        /* List all models in collection */
        return (
          <div className="list-group">
            {this.getCollection().map(this.renderListItem)}
          </div>);
      } else if (action === 'view') {
        /* View one model in uneditable form */
        return (
          <FormPanel>
            <Form disabled={true} onReset={this.onItemReset} model={this.state.target} />
          </FormPanel>);  
      } else if(action === 'edit') {
        /* Edit existing model in form */
        return (
          <FormPanel>
            <Form disabled={false} model={this.state.target} onReset={this.onItemReset} onSubmit={this.onItemUpdate}/>
          </FormPanel>);
      } else if (action === 'add') {
        /* Create new instance in form */
        return (
          <FormPanel>
            <Form disabled={false} onReset={this.onItemReset} onSubmit={this.onNewItemSave}
             model={this.state.target}/>
          </FormPanel>);
      } else {
        throw 'This component has invalid state';
      }
    },
    render: function(){
      return (
        <div className="editable-list panel panel-default">
          <div className="panel-heading">
            <div className="row">  
              <div className="col-md-10">
                <h1 className="h1">{this.props.label}</h1>
              </div>          
              <div className="col-md-2">
                <button className="btn btn-primary" onClick={this.addItem}>
                  <span className="glyphicon glyphicon-plus"/> Добавить
                </button>
              </div>
            </div>
          </div>
          <div className="panel-body">          
            {this.renderBody()}    
          </div>
        </div>
      );
    }
  });
  return EditableList;
});