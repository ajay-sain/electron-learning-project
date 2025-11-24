import { LitElement, html, css } from 'lit';

import '../app-sidebar';
import './path-breadcrumb';
// import '../content-area';
import './folders-section';
import './file-section';

export class MainContainer extends LitElement {
    static styles = css`
    .main-container {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100vh;
    }
    .main-content {
        flex: 1;
        padding: 24px;
        overflow-y: auto;
        background: #f9fafb;
    }
    @media (max-width: 768px) {
    
    }
    @media (max-width: 480px) {
        .main-container {
            flex-direction: column;
        }
    }
    `;
    constructor() {
        super();
    }
    render() {
        return html`
        <div class="main-container">
            <app-sidebar></app-sidebar>
            <div class="main-content">
                <br/>
                <path-breadcrumb></path-breadcrumb>
                <folders-section></folders-section>
                <file-section></file-section>
            </div>
        </div>
        `;
    }
}

customElements.define('main-container', MainContainer);
