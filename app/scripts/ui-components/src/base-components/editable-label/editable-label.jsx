define(['react'], function(React){
    'use strict';
    var EditableLabel = React.createClass({
        getDefaultProps: function(){
            return {
                size: 4,
                defaultEditMode: false
            };
        },
        getInitialState: function(){
            return {
                value: this.props.value,
                dirty: false,
                editMode: this.props.defaultEditMode
            };
        },
        startEditing: function(e){
            e.preventDefault();
            this.setState({editMode: true});
        },
        onEdit: function(e){
            e.preventDefault();
            var input = e.target.value;
            if(input !== this.props.value){
                this.setState({value: input, dirty: true});
            } else {
                this.setState({value: input, dirty: false});
            }
        },
        onSave: function(e){
            e.preventDefault();
            if(this.state.dirty && this.props.onSave){
                this.props.onSave(this.state.value);
            }
            this.setState({editMode: false, dirty: false});
        },
        render: function(){
            if(this.state.editMode){
                return (
                    <div className={'editable-label col-lg-'+this.props.size}>
                        <form onSubmit={this.onSave} className="input-group">
                            <input type="text" value={this.state.value} className="form-control" onChange={this.onEdit}/>
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-primary">
                                    <span className="glyphicon glyphicon-ok" />
                                </button>
                            </span>
                        </form>
                    </div>
                    );
            }else{
                return (
                    <div className={'editable-label col-lg-'+this.props.size}>
                        <label onDoubleClick={this.startEditing}>{this.state.value}</label>
                    </div>
                    );
            }
        }
    });

    return EditableLabel;
});