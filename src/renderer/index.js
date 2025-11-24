import { LitElement, html, css } from 'lit';

import './components/main-container';
import './components/app-header';

// import './handlers.js'

export class FileManager extends LitElement {
  static styles = css`
    .app-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
  `;

  constructor() {
    super();
    // this.currentDir = os.homedir();
    // console.log('Current Directory:', this.currentDir);
  }
  render() {
    return html`
    <div class="app-container">
      <app-header></app-header>
      <main-container></main-container>
    </div>
    `;
  }
}

customElements.define('file-manager', FileManager);
