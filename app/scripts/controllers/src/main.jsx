define(['react', 'ui/page/page', 'ui/lorem/lorem'], function(React, Page, Lorem ) {
    return function() {
    	React.render(<Page name='Backbone and React!'>
                      <div className='col-lg-12'>
                        <Lorem/>
                        <Lorem/>
                        <Lorem/>
                      </div>
                   </Page>,
                   document.getElementById('main'));
    }
});
