import { Link } from 'https://esm.sh/preact-router@3.2.1/match'
import { html } from 'https://esm.sh/htm@3.1.0/preact'

export default Navbar = () => html`
<nav>
    <${Link} id=home activeClassName=active href="/">Home<//>${" "}
    <${Link} id=about activeClassName=active href="/about">About<//>
<//>`