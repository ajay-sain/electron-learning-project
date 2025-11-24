import { LitElement, html, css } from 'lit';

export class AppHeader extends LitElement {
  static styles = css`
  
    .app-header {
      display: flex;
      align-items: center;
      height: 56px;
      padding: 0 16px;
      background-color: #ffffff;
      border-bottom: 1px solid #e0e0e0;
      box-sizing: border-box;
    }
    .header-center {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    .search-bar {
      display: flex;
      align-items: center;
      background-color: #f1f3f4;
      border-radius: 8px;
      padding: 4px 8px;
      width: 100%;
      max-width: 400px;
    }
    .search-bar svg {
      margin-right: 8px;
      color: #5f6368;
    }
    .search-bar input {
      border: none;
      background: none;
      outline: none;
      width: 100%;
      font-size: 14px;
      color: #202124;
    }
    .search-bar input::placeholder {
      color: #5f6368;
    }
  `;
  constructor() {
    super();
  }
  render() {
    return html`
    <header class="app-header">
      <div class="header-center">
        <div class="search-bar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input type="text" placeholder="Type or press ⌘+F for search files...">
        </div>
      </div>
    </header>
    `;
  }
}

customElements.define('app-header', AppHeader);
