define(['react'], function(React){
	return React.createClass({
		makeLink: function(elem){
			return <li><a href={elem.href}>{elem.title}</a></li>;
		},
		render: function(){
			return <div className='bread-crumbs'>
				<ol className='breadcrumb'>
					{this.props.links.map(this.makeLink)}
				</ol>
			</div>;
		}
	});
});