define(['react'], function(React){
  return React.createClass({
    getInitialState: function(){
      return {
        value: '',
        formClass: 'form-control',
        valid: 'valid'
      };
    },
    getDefaultProps: function(){
      return {
        disabled: false,
        type: 'text',
        contactType : ''
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
      var inputString = e.target.value;
      var pattern = / /;
      if (this.props.contactType === 'email') {
        pattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      } else if (this.props.contactType === 'phone') {
        pattern = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{7,10}$/;
      }
      if (pattern.test(inputString) === true || inputString === '') {
        this.setState({valid: 'valid'});
      } else {
        this.setState({valid: 'invalid'});
      }
      this.setState({value: e.target.value});
    },
    render: function(){
      var value = this.state.value;
      if (this.state.valid === 'valid') {
          this.state.formClass = 'form-control valid';
        } else {
          this.state.formClass = 'form-control invalid';
        }
      return (
        <div className = {'contact-input col-md-' + this.props.size}>
          <div className="input-group">
            <span className="input-group-addon">{this.props.label} </span>
            <input disabled={this.props.disabled} type={this.props.type} className={this.state.formClass} value={value} placeholder={this.props.placeholder} onChange={this.onChange} />
          </div>
        </div>);
      }
    });
});
