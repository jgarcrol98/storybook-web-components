import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { IconFontType } from './model/icon-types';

export class WcIconViewModel extends LitElement {
  @property({ type: String }) public name: string = '';
  @property({ type: String }) public fontType: IconFontType = 'outlined';
  @property({ type: Boolean, reflect: true }) public filled: boolean = false;
}
