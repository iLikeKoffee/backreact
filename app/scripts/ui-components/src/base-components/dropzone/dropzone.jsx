define(['react', 'jquery', 'dropzone'], function(React, $, Dropzone){
  return React.createClass({
    getDefaultProps: function(){
      return {
        size: 12
      };
    },
    componentDidMount: function(){
      $(".dropzone").dropzone({url: this.props.url});
    },
    render: function(){
      return(
        <div className={"drop-zone col-md-"+this.props.size}>
            <form id="my-awesome-dropzone" action="/target" className="dropzone">
              <div className="dz-message">
                <label>{this.props.label}</label>
              </div>
            </form>
          </div>
      );
    }
  });
});
