import { LitElement, html, css } from 'lit';

export class LitFooter extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                margin-top:5%;
            }
            .div{
                background-color:#6a6968;
                display: inline-flex;
                height:80px;
                width:100%;
                align-items:center;
            }
            .footer{
                width:150px;
                color:beige;
                margin-left:15%;
            }
            
            a{
                color:beige;
                text-decoration:none;
            }
        `
    ];

    render() {
        return html`
         <div class="div">
                <div class="footer">
                    <a>esto es un footer</a>
                </div>
                <div class="footer">
                    <a>esto es un footer</a>
                </div>
                <div class="footer">
                    <a>esto es un footer</a>
                </div>
            </div>
        `;
    }
}
customElements.define('lit-footer', LitFooter);
