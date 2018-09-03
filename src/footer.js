I am trying to create a Layout component which would render the Header and Footer. So that I can later on use the Layout like

<Layout> ... </Layout>

I have used Routing in the Header and Footer, obviously. To do this, I need to use

<Router history...
 <Route path...

When I do this one after the other(for header and footer: though I feel that this is wrong) in my layout.js. It works. The header and footer are shown in the browser. However, they don't work properly. On refresh the footer vanishes and sometimes both, the header and the footer. I strongly believe that rendering Router one after the other is the reason for this malfunctioning, but I can't figure out the correct approach. Moreover, I don't want to use the following snippets

header.js

import React from 'react';
import {Link} from 'react-router'
import {Navbar, NavItem} from 'react-materialize';

export default React.createClass({
 render(){
return (
<div>
<Navbar brand='logo' right>
  <NavItem><Link to="/Home" activeClassName="active">Home</Link></NavItem>
  <NavItem><Link to="/Sign-In" activeClassName="active">Sign In</Link></NavItem>
  <NavItem><Link to="/Register" activeClassName="active">Register</Link></NavItem>
</Navbar>
{this.props.children}
</div>
)
}
})