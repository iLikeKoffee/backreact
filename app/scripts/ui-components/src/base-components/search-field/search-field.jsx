define(['react'], function(React){
    var SearchField = React.createClass({
        getInitialState: function(){
          return {input: ""};
        },
        getDefaultProps: function(){
          return {
            placeholder: "Найти..."
          };
        },
        onChange: function(e){
          this.setState({input: e.target.value});
          if(this.props.onChange){
            this.props.onChange(e.target.value);
          }
        },
        onSubmit: function(e){
          e.preventDefault();
          if(this.props.onSubmit){
            this.props.onSubmit(this.state.input);
          }
        },
        onReset: function(e){
          e.preventDefault();
          this.setState({input: ""});
          if(this.props.onReset){
            this.props.onReset();
          }
        },
        renderRemoveButton: function(){
          if(this.state.input.length > 0){
              return  <button type="reset" className="search-field-reset">
                         <span className="glyphicon glyphicon-remove" />
                      </button>;
          }
        },
        render: function(){
          return <form onSubmit={this.onSubmit} onReset={this.onReset} className={"search-field col-lg-" + this.props.size}>
                      <div className="input-group input-group-sm">
                          <input type="search" placeholder={this.props.placeholder} className="form-control" onChange={this.onChange} value={this.state.input} />
                          <span className="input-group-btn">
                              <button type="submit" className="btn btn-primary search-field-submit">
                                  <span className="glyphicon glyphicon-search" />
                              </button>
                          </span>
                      </div>
                      {this.renderRemoveButton()}
                 </form>;
        }
    });
    return SearchField;
});
