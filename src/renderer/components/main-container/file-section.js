import { LitElement, html, css } from 'lit';

export class FileSection extends LitElement {
  static styles = css`
  .files-section {
    background: white;
    border-radius: 8px;
    padding: 24px;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
  }

  .section-header h2 {
    font-size: 16px;
    font-weight: 600;
    color: #374151;
  }

  .files-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }

  .file-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .file-item:hover {
    background: #f9fafb;
  }

  .file-preview {
    width: 120px;
    height: 80px;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 8px;
    background: #f3f4f6;
  }

  .file-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .file-icon {
    width: 120px;
    height: 80px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    color: white;
  }

  .file-icon.mp3 {
    background: #10b981;
  }

  .file-icon.pdf {
    background: #ef4444;
  }

  .file-icon.doc {
    background: #3b82f6;
  }

  .file-info {
    text-align: center;
    width: 100%;
  }

  .file-info h4 {
    font-size: 12px;
    font-weight: 500;
    color: #374151;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .file-size {
    font-size: 11px;
    color: #6b7280;
  }
  `;
  constructor() {
    super();
  }
  render() {
    return html`
    <section class="files-section">
      <div class="section-header">
        <h2>Files</h2>
      </div>
      <div class="files-grid">

        ${["a", "b","c"].map(() => html`
        <div class="file-item">
          <div class="file-icon pdf">
            <span>PDF</span>
          </div>
          <div class="file-info">
            <h4>the best places.pdf</h4>
            <span class="file-size">2.45 MB</span>
          </div>
        </div>
        `)}
      </div>
    </section>
    `;
  }
}

customElements.define('file-section', FileSection);
