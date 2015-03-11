define(['react', 'ui/base-components/search-field/search-field'], function(React, SearchField) {
  describe('Search field behaviour tests', function() {
    var TestUtils = React.addons.TestUtils;
    var sf;
    beforeEach(function(){
      sf = TestUtils.renderIntoDocument(React.createElement(SearchField, {}));
    });

    it('Should render itself into DOM', function(){
      expect(TestUtils.isCompositeComponent(sf)).toBe(true);
    });

    it('Should change value on input and set value to empty string on reset', function(){
      var field = TestUtils.findRenderedDOMComponentWithTag(sf, 'input');

      TestUtils.Simulate.change(field, {target: {value: 'Search query'}});

      expect(field.getDOMNode().value).toBe('Search query');

      var form = TestUtils.findRenderedDOMComponentWithTag(sf, 'form');

      TestUtils.Simulate.reset(form);

      expect(field.getDOMNode().value).toBe('');
    });

    it('Should render a placeholder, dependent on argument', function(){
      sf = TestUtils.renderIntoDocument(React.createElement(SearchField, { placeholder: 'Test'}));
      var input = TestUtils.findRenderedDOMComponentWithTag(sf, 'input');

      expect(input.getDOMNode().placeholder).toBe('Test');
    });

    it('Should render a default placeholder, when no argument', function(){
      var input = TestUtils.findRenderedDOMComponentWithTag(sf, 'input');

      expect(input.getDOMNode().placeholder).toBe('Найти...');
    });

  });
});
