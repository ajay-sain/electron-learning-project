import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import './container';
import './header';

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}

func()

@customElement('file-manager')
export class SimpleGreeting extends LitElement {
    static styles = css`
    .app-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }`;
    loadDir(){
        return window.versions.homeDir()
    }

    render() {
        return html`<div class="app-container"> 
            <app-header></app-header>
            <main-container dir=${this.loadDir()}></main-container>
        </div>`;
    }
}