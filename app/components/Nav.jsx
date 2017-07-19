var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function () {
	  return (
		<nav className="navbar navbar-inverse bg-inverse">
  			<div className="container-fluid">
    			
    			<div className="navbar-header">
      				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        				<span className="sr-only">Toggle navigation</span>
        				<span className="icon-bar"></span>
        				<span className="icon-bar"></span>
        				<span className="icon-bar"></span>
      				</button>
      				
      				<div className="navbar-brand"> <Link to='/'> React Timer App </Link> </div>   
    			</div>


    			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      				
              <ul className="nav navbar-nav navbar-left">      				
                <li className="active"> 
        					<IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Timer 
        						<span className="sr-only">(current)</span>
        					</IndexLink>
        				</li>
        				
        				<li>
        					<Link to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Countdown </Link>
        				</li>

      				</ul>

               <ul className="nav navbar-nav navbar-right">
                  <li> <span >  Created by <a href="http://tuancaraballo.com">Tuan Caraballo </a>  </span></li>
              </ul>

    			</div>
    		</div>
		</nav>
	);
	}
});
	
module.exports = Nav;
