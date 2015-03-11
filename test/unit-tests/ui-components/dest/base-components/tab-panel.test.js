define(['react', 'ui/base-components/tab-panel/tab-panel', 'ui/base-components/tab-panel/tab'],
  function(React, TabPanel, Tab) {
  describe('Tab panel behaviour tests', function() {
    var TestUtils = React.addons.TestUtils;
    var tp;

    beforeEach(function(){
      tp = TestUtils.renderIntoDocument((
        React.createElement(TabPanel, {size: 12}, 
          React.createElement(Tab, {name: "Tab1", active: "true", counter: 1}, 
            React.createElement("h1", null, "Tab 1 content")
          ), 
          React.createElement(Tab, {name: "Tab2"}, 
            React.createElement("h1", null, "Tab 2 content")
          )
        )
        ));
    });

    it('Should render itself into DOM', function(){
      expect(TestUtils.isCompositeComponent(tp)).toBe(true);
    });

    it('Should contain active tab\'s children', function(){
      var h1 = TestUtils.findRenderedDOMComponentWithTag(tp, 'h1');
      expect(h1.getDOMNode().innerHTML).toContain('Tab 1 content');
    });

    it('Should not contain unactive tab\'s children', function(){
      var h1 = TestUtils.findRenderedDOMComponentWithTag(tp, 'h1');
      expect(h1.getDOMNode().innerHTML).not.toContain('Tab 2 content');
    });

    it('Should contain counter with passed value', function(){
      var counter = TestUtils.findRenderedDOMComponentWithClass(tp, 'label-primary');
      expect(counter.getDOMNode().innerHTML).toContain('1');
    });

    it('Should switch tab content on click', function(){
      var tab2 = TestUtils.scryRenderedDOMComponentsWithTag(tp, 'a')[1];
      TestUtils.Simulate.click(tab2);
      /* Content of first tab is not rendered */
      var h1 = TestUtils.findRenderedDOMComponentWithTag(tp, 'h1');
      expect(h1.getDOMNode().innerHTML).not.toContain('Tab 1 content');
      /* Content of second is seen */
      h1 = TestUtils.findRenderedDOMComponentWithTag(tp, 'h1');
      expect(h1.getDOMNode().innerHTML).toContain('Tab 2 content');
    });
  });
});
