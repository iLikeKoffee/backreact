define(['react', 'react.backbone'],
  function(React){
    var SearchList = React.createBackboneClass({
      getDefaultProps: function () {
        return {
          size: 5
        };
      },
      renderOption: function(model){
        return (<option value={model.toString()}/>);
      },
      onSubmit: function(e){
        e.preventDefault();
        
        var model = this.getCollection().find(function(model){
          return model.toString() === e.target.input.value;
        });

        if(this.props.onChange){
          this.props.onChange(model);
        }
      },
      render: function() {
        return (
          <form onSubmit={this.onSubmit}>
            <div className={"search-list col-md-"+this.props.size}>
              <div className="input-group">
                <span className="input-group-addon">{this.props.label} </span>  
                <input type="text" name="input" list={this.props.htmlId} className="form-control"/>
              </div>
              <datalist id={this.props.htmlId}>
                {this.getCollection().map(this.renderOption)}
              </datalist>
            </div>
          </form>);
      }
    });

    return SearchList;
  });