define(['react'], function(React){
  return React.createClass({
    getDefaultProps: function() {
      return {
        size: "6",
        disabled: false
      };
    },
    render: function(){
      return (
        <div className={"checkbox-wrapper col-md-"+this.props.size}>
          <label className="checkbox-label">
            <input type="checkbox" disabled={this.props.disabled} defautlChecked={this.props.checked} 
              className="checkbox" onChange={this.onChange} />
            {this.props.label}
          </label>
        </div>);
    },
    onChange: function(e){
      var checked = e.target.checked;
      if(this.props.onChange){
        this.props.onChange(checked);
      }
    }
  });
});