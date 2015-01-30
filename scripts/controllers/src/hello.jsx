define(['react', 'ui/nav/nav'], function(React, Nav) {
    return function(name) {
    	React.render(<Nav name={name}/>, document.getElementById('main'))
    }
});