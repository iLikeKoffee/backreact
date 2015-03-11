define(['react', 'jquery','pickmeup'], function(React, $, pickmeup){
  return React.createClass({
    getInitialState: function(){
      return {
        value: this.props.value
      };
    },
    getDefaultProps: function(){
      return {
        disabled: false,
        value:''
      };
    },
    onChange: function(e){
      this.setState({value: e.target.value});
      if(this.props.onChange){
        this.props.onChange(e.target.value);
      }
    },
    componentDidMount: function(){
      $('.datepicker .form-control').pickmeup();
    },
    render: function(){
      var value = this.state.value;
      return (
        <div className = {'datepicker col-md-' + this.props.size}>
          <div className="input-group">
            <span className="input-group-addon">{this.props.label} </span>
            <input disabled={this.props.disabled} type={this.props.type} className="form-control" value={value} placeholder={this.props.placeholder} onChange={this.onChange} valueType={this.props.valueType} />
          </div>
        </div>);
    }
  });
});
