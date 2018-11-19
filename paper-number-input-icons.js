import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';

const template = html`<iron-iconset-svg size="24" name="integer-input">
  <svg>
    <defs>
      <g id="step-up"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
      <g id="step-down"><path d="M19 13H5v-2h14v2z"></path></g>
    </defs>
  </svg>
</iron-iconset-svg>`;

document.head.appendChild(template.content);
