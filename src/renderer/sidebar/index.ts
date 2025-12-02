import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import './sidebar-section';

@customElement('app-sidebar')
export class AppSidebar extends LitElement {
    static styles = css`
    .app-sidebar {
        width: 280px;
        background: white;
        border-right: 1px solid #e5e7eb;
        padding: 16px 0;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .sidebar-header {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 20px;
    }
    @media (max-width: 768px) {
        .sidebar {
            width: 240px;
        }
    }
    @media (max-width: 480px) {
        .sidebar {
            width: 100%;
            height: 200px;
            border-right: none;
            border-bottom: 1px solid #e5e7eb;
        }
    }
    `;

    render() {
        return html`
        <aside class="app-sidebar">
            ${["a", "b", "c"].map( item => html`<sidebar-section name=${item}></sidebar-section>`)}
        </aside>`;
    }
}