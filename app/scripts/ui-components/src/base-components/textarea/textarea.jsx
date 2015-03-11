define(['react'], function(React){
  return React.createClass({
    getInitialState: function(){
      return {
        value: '',
      };
    },
    getDefaultProps: function(){
      return {
        disabled: false
      };
    },
    componentWillMount: function(){
      if(this.props.value){
       this.setState({value: this.props.value});
      }
    },
    onChange: function(e){
      if(this.props.onChange){
        this.props.onChange(e.target.value);
      }
      this.setState({value: e.target.value});
    },
    render: function(){
      var value = this.state.value;
      return (
        <div className = {'textarea-input col-lg-' + this.props.size}>
          <label>{this.props.label}</label>
          <textarea disabled={this.props.disabled} className='form-control' value={value} onChange={this.onChange} />
        </div>);
      }
    });
});
