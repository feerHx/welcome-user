import { LitElement, html, css } from 'lit';

export class SlotComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                background-color:#cb903c;
                border-radius: 5px;
                margin-left:30%;
                margin-right:30%;
                height:30%;
                text-align:center;
                color: beige;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
            }
        `
    ];
    static get properties() {
        return {
            access: { type: String },
            cliente: { type: String }
        };
    }
    constructor(){
        super();
        this.access="Desconocido";
        this.cliente="Desconocido";
    }

    render() {
        return html`
            <slot>
                <h2>El acceso del cliente ${this.cliente} es: ${this.access} </h2>
            </slot>
            
        `;
    }
}
customElements.define('slot-component', SlotComponent);
