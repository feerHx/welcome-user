import { LitElement, html, css } from 'lit';

import "./components/form-edad";
import "./components/lit-nav";
import "./components/lit-footer";
export class MyPage extends LitElement {
    static styles=[
        css`
        h1{
            text-align: center;
            color: beige;
        }
        
        `
    ];

    render() {
        return html`
        <lit-nav></lit-nav>
        <h1>Sistema de verificación de clientes</h1>
        <form-edad></form-edad>
        <lit-footer></lit-footer>
        `;
    }
}
customElements.define('my-page', MyPage);
