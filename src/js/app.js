import { Router } from 'https://esm.sh/preact-router@3.2.1'
import { html } from 'https://esm.sh/htm@3.1.0/preact'
import { render } from 'https://esm.sh/preact@10.5.14'

import Navbar from 'components/navbar.js'
import Home from 'components/home.js'
import About from 'components/about.js'

const App = () => html`
<${Navbar}/>
<${Router}>
    <${Home} default />
    <${About} path=/about />
<//>`

render(App(), document.getElementById('app'))