import { LitElement, html, css } from 'lit';

import './folder-item';

export class FoldersSection extends LitElement {
  static styles = css`
  .folders-section {
    margin-bottom: 32px;
  }

  .folder-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }

  .folder-item {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 16px;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
  }

  .folder-item:hover {
    border-color: #d1d5db;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .folder-item.locked::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
  }
  .folder-info h3 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    color: #374151;
  }

  .folder-icon {
    position: relative;
    margin-bottom: 12px;
  }
  `;
  constructor() {
    super();
  }
  render() {
    return html`
    <section class="folders-section">
          <div class="folder-grid">
          ${["a", "b", "c"].map(() => html`
            <div class="folder-item">
              <div class="folder-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#FFB800">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                </div>
                <div class="folder-info">
                <h5>Desktop files</h5>
                <div class="folder-stats">
                    <span>12</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                    </svg>
                    <span>124</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21,15 16,10 5,21" />
                    </svg>
                </div>
                </div>
            </div>
            `)}
          </div>
    </section>
    `;
  }
}

customElements.define('folders-section', FoldersSection);
