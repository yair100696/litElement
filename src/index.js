import { LitElement, html } from "lit-element";
import './getData';

class Index extends LitElement {

    static get properties() {
        return {
            resultado: {type: Array},
        }
    }

    constructor() {
        super();
        this.resultado = [];
        this.addEventListener('apiData', (datos) => {
            this.dataFormat(datos.detail.data);
        })
    }

    dataFormat(data) {
        let elemento = [];
        data["results"].forEach((elemento) => {
            console.log(elemento);
        });
        this.resultado = elemento;
    }
    

    render() {
        return html `
        <get-data url="https://api.datos.gob.mx/v2/Releases_SFP" metodo="GET"></get-data>
        ${this.dataTemplete}

        `;
    }

    get dataTemplete() {
        return html `
            ${this.resultado.map(elemento => html `
            <div class="card-content">
                <h2>${elemento.buyer}</h2>
            </div>
            `)}
        `;
    }
}

customElements.define('index-principal', Index);