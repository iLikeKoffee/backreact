define(['react'], function(React){
  return React.createClass({
    getInitialState: function(){
      return {
        value: '',
        valid: true,
      };
    },
    getDefaultProps: function(){
      return {
        disabled: false,
        type: 'text'
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
      var dataStr = e.target.value;
      var pattern = / /;
      var valueType = this.props.valueType;
      switch (valueType){
        case 'integer':
          pattern =  /^[0-9]+$/;
          break;
        case 'float':
          pattern = /^[0-9]+\.[0-9]+$/;
          break;
        default:
          pattern = /\w/;
      }
      if(pattern.test(dataStr) === true || dataStr === ''){
        this.setState({valid: true});
      }
      else{
        this.setState({valid: false});
      }
      this.setState({value: e.target.value});
    },
    
    render: function(){
      var value = this.state.value;      
      if (this.state.valid){
          this.state.formClass = 'form-control valid';
      }
      else{
          this.state.formClass = 'form-control invalid';
      }
      return (
        <div className = {'input col-lg-' + this.props.size}>
          <div className="input-group">
            <span className="input-group-addon">{this.props.label} </span>
            <input disabled={this.props.disabled} type={this.props.type} className={this.state.formClass} value={value} placeholder={this.props.placeholder} onChange={this.onChange} valueType={this.props.valueType} />
          </div>
        </div>);
      }
    });
});
