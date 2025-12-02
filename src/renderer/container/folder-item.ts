import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('folder-item')
export class FolderItem extends LitElement {
    static styles = css`p { color: blue }`;

    render() {
        return html`<p>Hello, World!</p>`;
    }
}