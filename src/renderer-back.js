import { LitElement, html, css } from 'lit';

import './components/main-container';
import './components/app-header';

export class FileManager extends LitElement {
  static styles = css`
    .app-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
  `;
/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Constructs a new FileManager element.
   * This element is responsible for rendering the File Manager interface.
   * @constructor
   */
/*******  534756ec-411a-40aa-b0c3-ece048bc3d52  *******/
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
