'use strict';
define(['react', 'ui/panel/panel'], function(React, Panel) {
  describe('Search field behaviour tests', function() {
    var TestUtils = React.addons.TestUtils;
    var panel;
    var p;
    beforeEach(function(){
      p = React.createElement('p',{},['Paragraph content']);
      panel = TestUtils.renderIntoDocument(React.createElement(Panel, {title: "Test"}, [p]));
    });

    it('Should render itself into DOM', function(){
      expect(TestUtils.isCompositeComponent(panel)).toBe(true);
    });

    it('Should render title from props', function(){
      var h1 = TestUtils.findRenderedDOMComponentWithTag(panel, 'h1');
      expect(h1.getDOMNode().innerHTML).toBe('Test');
    });

    it('Should render children from props', function(){
      var paragraph = TestUtils.findRenderedDOMComponentWithTag(panel, 'p');
      /* 
       * Specific react feature, it does not render text node directly, 
       * but render <span ... >Paragraph content</span>
       */
      expect(paragraph.getDOMNode().innerHTML).toContain('Paragraph content');
    });

  });
});
