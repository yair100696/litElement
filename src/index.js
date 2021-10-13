import { LitElement, html, css } from "lit-element";
import './getData';

class Index extends LitElement {

    static get properties() {
        return {
            resultado: {type: Array},
        }
    }

    static get styles() {
        return css `
            table {
                background-color: #5499C7 ;
                text-align: left;
                width: 100%;
            }

            #main-container{
                margin: 200px auto
                width: 600px
            }

            td{padding: 20px}
            thead{background-color: #246355;
            border-bottom: solid 5px #0F362D
            color: white;
            }

        `;
    }

    constructor() {
        super();
        this.resultado = [];
        this.addEventListener('apiData', (datos) => {
            this.resultado = datos.detail.data.results;
            console.log(datos.detail.data.results);
        })
    }

    render() {
        return html `
        <get-data url="https://api.datos.gob.mx/v2/Releases_SFP" metodo="GET"></get-data>
        ${this.dataTemplete}`;
    }

    get dataTemplete() {
        return html `
            ${this.resultado.map(elemento => html `
            <div id="main-container">
                <table>
                    <thead>
                        <tr>
                            <th>Comprador</th><th>Publisher</th>
                        </tr>
                    </thead>
                        <tr>
                            <td>${elemento.buyer.name}</td> <td>${elemento.publisher.name}</td>
                        </tr>
                </table>
            </div>
            `)}
        `;
    }
}

customElements.define('index-principal', Index);