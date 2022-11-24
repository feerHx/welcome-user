import { LitElement, html, css } from 'lit';

export class PerfilUser extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            userName: { type: String },
            ltName: {type: String},
            age: {type: Date}
        };
    }
    constructor(){
        this.userName="";
        this.ltName="";
        this.age=0;
    }

    render() {
        return html`
            <slot>
                <h2>Bienvenidx ${this.name}</h2>
            </slot>
        `;
    }
}
customElements.define('perfil-user', PerfilUser);
