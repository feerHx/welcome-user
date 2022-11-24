import { LitElement, html, css } from 'lit';

export class Navbar extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
            }
            .div{
                background-color:#cb903c;
                display: inline-flex;
                height:85px;
                width:100%;
                align-items:center;
            }
            .navbar{
                width:150px;
                color:beige;
                margin-right:5%;
            }
            
            a{
                color:beige;
                text-decoration:none;
                
            }
            img{
                height:80px;
                margin-left:5%;
            }
        `
    ];

    render() {
        return html`
            <div class="div">
                <div class="navbar">
                    <a href="/"><img src="../logo.png"></a>
                </div>
                <div class="navbar">
                    <a href="/">esto es un navbar</a>
                </div>
                <div class="navbar">
                    <a href="/">esto es un navbar</a>
                </div>
                <div class="navbar">
                    <a href="/">esto es un navbar</a>
                </div>
                <div class="navbar">
                    <a href="/">esto es un navbar</a>
                </div>
                <div class="navbar">
                    <a href="/">esto es un navbar</a>
                </div>
            </div>
        `;
    }
}
customElements.define('lit-nav', Navbar);
