import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('path-breadcrumb')
export class PathBreadcrumb extends LitElement {
    static styles = css`
    .breadcrumb {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 24px;
        font-size: 14px;
        color: #6b7280;
    }

    .breadcrumb span:last-child {
        color: #374151;
        font-weight: 500;
    }`;

    render() {
        return html`
        <nav class="breadcrumb">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            <span>Projects</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9,18 15,12 9,6" />
            </svg>
            <span>Assets & Materials</span>
        </nav>`;
    }
}