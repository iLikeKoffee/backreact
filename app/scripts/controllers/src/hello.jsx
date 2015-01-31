define(['react', 'ui/page/page', 'ui/lorem/lorem'], function(React, Page, Lorem ) {
    return function(name) {
      React.render(<Page name={name}>
                      <div className='col-lg-12'>
                        <Lorem/>
                        <Lorem/>
                        <Lorem/>
                      </div>
                   </Page>,
                   document.getElementById('main'));
    }
});
