import { LitElement, html } from "lit-element";
class GetData extends LitElement {

    static get properties() {
        return {
            url: {type: String},
            metodo: {type: String}
        }
    }

    firstUpdated() {
        this.obtenerDatos();
    }

    sendData(data) {
        this.dispatchEvent(new CustomEvent('apiData', {
            detail: {data}, bubbles: true, composed: true
        }));
    }


    obtenerDatos() {
        fetch(this.url, {method: this.metodo})
        .then((respuesta) => {
            if (respuesta) {
                return respuesta.json();
            }
        })
        .then((data) => {
            this.sendData(data);
        })
        .catch((error) => {
            console.log("Esto es un error", error);
        })
    }

}

customElements.define('get-data', GetData);