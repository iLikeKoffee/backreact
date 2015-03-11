define(['react'],function(React){
  'use strict';
  var Tab = React.createClass({
    getDefaultProps: function (){
      return {
        counter: 0
      };
    },
    render: function() {
      return (
        <div className="tab row">
          {this.props.children}
        </div>
      );
    }
  });

  return Tab;
});