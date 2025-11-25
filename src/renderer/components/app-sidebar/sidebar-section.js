import { LitElement, html, css } from 'lit';

export class SidebarSection extends LitElement {
    static styles = css`
    .sidebar-section {
        margin-bottom: 8px;
    }
    .sidebar-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 20px;
        cursor: pointer;
        font-size: 14px;
        color: #374151;
        position: relative;
    }

    .sidebar-item:hover {
        background: #f9fafb;
    }

    .sidebar-item.active {
        background: #eff6ff;
        color: #2563eb;
        font-weight: 500;
    }

    .sidebar-item.expandable {
        justify-content: space-between;
    }

    .sidebar-item .count {
        background: #f3f4f6;
        color: #6b7280;
        font-size: 12px;
        padding: 2px 6px;
        border-radius: 10px;
        margin-left: auto;
    }

    .sidebar-item.active .count {
        background: #dbeafe;
        color: #2563eb;
    }

    .expand-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .sidebar-item.expanded .expand-icon {
        transform: rotate(180deg);
    }

    `;
    constructor() {
        super();
    }
    render() {
        return html`
        <div class="sidebar-section" @click=${window.fileManager.loafDir}>
          <div class="sidebar-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            <span>My Files</span>
          </div>
        </div>
        `;
    }
}

customElements.define('sidebar-section', SidebarSection);
