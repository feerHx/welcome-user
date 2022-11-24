import { LitElement, html, css } from 'lit';
import "./slot-component";
import "./perfil-user";

export class FormEdad extends LitElement {
    static styles = [
        css`
            .host {
                display: block;
                background-color:beige;
                border-radius: 5px;
                margin-left:30%;
                margin-right:30%;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                padding: 5%;
            }
            h5,h2{
                margin-top: 10px;
                text-align:center;
            }
            input{
                width: 50%;
            }
            button{
                border-color:#4a8f79;
                background-color:#4a8f79;
                color:beige;
            }
        `
    ];

    static properties = {
        name: { type: String },
        age: { type: Date },
        varValidar: { type: Boolean }

    }

    constructor() {
        super();
        this.name = "";
        this.age = "aaaa/mm/dd";
        this.varValidar = false;
    }


    render() {
        return html`
        <div class="host">
            <h2>Bienvenidx</h2>
            <h5>Por favor registrar el nombre del cliente y su edad para verificar el acceso.</h5>

            <p>Nombre:</p>
            <input type="text" id="nombre" placeholder="Ingresa el nombre del cliente"/>

            <p>Edad:</p>
            <input type=date id="edad" >
        
            <button @click=${this.verificar}>Verificar</button>  
            
        </div>
        ${this.varValidar ?
                html` <div>
                <slot-component access="aceptado" cliente=${this.name}></slot-component>
                <perfil-user nameUser=${this.name}></perfil-user>
            </div>`
                :
                html` <div>
                 <slot-component access="denegado" cliente=${this.name}></slot-component>
            </div>`
            }
            
        `;
    }
    verificar() {
        this.name = this.shadowRoot.getElementById("nombre").value;
        this.age = this.shadowRoot.getElementById("edad").value;
        if (this.name != "" && this.age != "") {
            let fechaActual = new Date();
            let anioActual = fechaActual.getFullYear();
            let diaActual = fechaActual.getDate();
            let mesActual = fechaActual.getMonth()+1;
            if (this.age > "" + (anioActual - 18) + "-" + mesActual + "-" + diaActual + "") {
                this.varValidar = false;
            } else { this.varValidar = true; }
        } else {
            alert("Ocurrio un error, falta llenar algún campo.")
        }

    }
}
customElements.define('form-edad', FormEdad);
