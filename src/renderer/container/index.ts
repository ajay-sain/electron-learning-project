import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../sidebar';
import './path-breadcrumb';
import './folders-section';
import './file-section';

import '../../index.css';

@customElement('main-container')
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
    @property({ type: String})
    dir: string;

    constructor() {
        super();
    }

    getDirContents() {
        window.versions.getDirContents(this.dir);
    }

    render() {
        console.log("dir", this.dir);
        return html`
        <div class="main-container">
            <app-sidebar></app-sidebar>
            <div class="main-content">
                <br/>
                <path-breadcrumb></path-breadcrumb>
                <folders-section></folders-section>
                <file-section></file-section>
            </div>
        </div>`;
    }
}