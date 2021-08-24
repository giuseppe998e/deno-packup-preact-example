import { html } from 'https://esm.sh/htm@3.1.0/preact'
import { Component } from 'https://esm.sh/preact@10.5.14'

export default class Home extends Component {
    render() {
        return html`
            <h2>Home<//>
            <p id=home>I'm RED!<//>
        `
    }
}