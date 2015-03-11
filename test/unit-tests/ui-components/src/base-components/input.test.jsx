define(['react', 'ui/base-components/input/input'], function(React, Input) {
  describe('Input tests', function() {
    var TestUtils = React.addons.TestUtils;
    var input;
    beforeEach(function(){
      input = TestUtils.renderIntoDocument(React.createElement(Input, {}));
    });

    it('Should render itself into DOM', function(){
      expect(TestUtils.isCompositeComponent(input)).toBe(true);
    });

    it('Should change value on input and set value to empty string on reset', function(){
      var inputField = TestUtils.findRenderedDOMComponentWithTag(input, 'input');

      TestUtils.Simulate.change(inputField, {target: {value: 'Some text'}});
      expect(inputField.getDOMNode().value).toBe('Some text');
    });

    it('should call onChange handler', function(){
      var spy = jasmine.createSpy("spy");
      var input = TestUtils.renderIntoDocument((<Input onChange={spy}/>));

      var inputField = TestUtils.findRenderedDOMComponentWithTag(input, 'input');

      TestUtils.Simulate.change(inputField, {target: {value: 'some text'}});
      expect(inputField.getDOMNode().value).toBe('some text');

      expect(spy).toHaveBeenCalled();
      expect(spy.calls.count()).toEqual(1);
    });

    it('should call onChange handler on every change', function(){
      var spy = jasmine.createSpy("spy");
      var input = TestUtils.renderIntoDocument((<Input onChange={spy}/>));

      var inputField = TestUtils.findRenderedDOMComponentWithTag(input, 'input');

      //Change value 3 times
      TestUtils.Simulate.change(inputField, {target: {value: 'some text'}});
      TestUtils.Simulate.change(inputField, {target: {value: 'some text'}});
      TestUtils.Simulate.change(inputField, {target: {value: 'some text'}});

      expect(inputField.getDOMNode().value).toBe('some text');

      expect(spy).toHaveBeenCalled();
      expect(spy.calls.count()).toEqual(3);
    });

    it('should set initial value', function(){
      var input = TestUtils.renderIntoDocument((<Input value='initial value'/>));
      var inputField = TestUtils.findRenderedDOMComponentWithTag(input, 'input');

      expect(inputField.getDOMNode().value).toBe('initial value');
    });
  });
});
