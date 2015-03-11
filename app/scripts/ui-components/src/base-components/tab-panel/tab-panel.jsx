define(['react'],function(React){
  'use strict';
  var TabPanel = React.createClass({
    /*
     * Looks for a tab wit active={true} and remembers it's index
     */
    getInitialState: function(){
      for(var i = 0; i < this.props.children.length; i++){
        if(this.props.children[i].props.active){
          break;
        }
      }
      return {
        activeTabIndex: i
      };
    },
    /*
     * Handles click on tab link
     */
    onTabSwitch: function(e){
      e.preventDefault();
      var index = parseInt(e.target.dataset.index);
      this.setState({activeTabIndex: index});
    },
    /*
     * Renders tab switcher.
     */
    renderTabHeadings: function(){
      var r = [];
      var tab;
      var className;
      for(var i = 0; i < this.props.children.length; i++){
        tab = this.props.children[i];
        className = (i === this.state.activeTabIndex) ? "active" : "";
        if(tab.props.counter > 0){
          r.push(
            <li role="presentation" className={className}>
              <a href='#' data-index={i} onClick={this.onTabSwitch}>
                <span data-index={i}>{tab.props.name}</span>
                <span className="label label-primary" data-index={i}>{tab.props.counter}</span>
              </a>
            </li>);
        } else {
          r.push(
            <li role="presentation" className={className}>
              <a href='#' data-index={i} onClick={this.onTabSwitch}>
                {tab.props.name}
              </a>
            </li>);
        }
      }
      return r;
    },
    /*
     * Returns Active tab
     */
    renderActiveTabContent: function(){
      return this.props.children[this.state.activeTabIndex];
    },
    /*
     * Renders entire component 
     */
    render: function() {
      var i = 0;
      var className = 'tab-panel col-lg-'+this.props.size;
      return (
        <div className={className}>
          <ul className="nav nav-tabs">
            {this.renderTabHeadings()}
          </ul>
          {this.renderActiveTabContent()}
        </div>
      );
    }
  });

  return TabPanel;
});