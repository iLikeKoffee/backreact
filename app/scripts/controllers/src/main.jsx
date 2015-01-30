define(['react', 'ui/nav/nav'], function(React, Nav) {
    return function() {
    	React.render(<Nav name="world"/>, document.getElementById('main'))
    }
});
