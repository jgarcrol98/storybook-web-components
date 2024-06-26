import { MdRipple } from '@material/web/ripple/ripple';
import { LitElement } from 'lit';
import { property, queryAsync } from 'lit/decorators.js';

export class WcRippleViewModel extends LitElement {
  @property({ type: Boolean, reflect: true }) public disabled: boolean = false;
  @property({ type: Boolean, reflect: true }) public unbounded: boolean = false;
  @property({ type: Object }) public control!: HTMLElement;

  @queryAsync('md-ripple') protected ripple!: Promise<MdRipple>;

  attach(control: HTMLElement | Promise<HTMLElement>) {
    return Promise.resolve(control).then(control => this.ripple.then(r => r.attach(control)));
  }
}
