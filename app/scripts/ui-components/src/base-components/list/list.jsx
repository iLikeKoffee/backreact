define(['react', 'react.backbone'], function(React){
	return React.createClass({
		getDefaultProps: function(){
			return {
				size: "6",
				disabled: false
			};
		},
		onChange: function(e){
			var key = e.target.value;
			if(this.props.onChange){
				if (key === undefined){
					this.props.onChange(null);
				} else {
					this.props.onChange(key);
				}
			}
		},
		renderOption: function(key){
			return <option value={key}>{this.props.options[key]}</option>;
		},
		render: function(){
			return <div className={'list col-md-' + this.props.size}>
						<div className='input-group'>
							<span className='input-group-addon'>{this.props.label} </span>
							<select onChange={this.onChange} disabled={this.props.disabled} className='form-control' value={this.props.value}>
								<option></option>
								{Object.keys(this.props.options).map(this.renderOption)}
							</select>
						</div>
					</div>;
		},
	});
});