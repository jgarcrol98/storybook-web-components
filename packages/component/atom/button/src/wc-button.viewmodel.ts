import { THEME_COLORS, THEME_SIZES, ThemeColor, ThemeSize } from '@jgarcrol98/wc-theme';
import { LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { BUTTON_STYLES, ButtonStyle } from './model/button-types';

/**
 * ViewModel para el componente de botón.
 * @category Component
 * @class
 * @extends LitElement
 * @property {string} label - Texto del botón.
 * @property {string} icon - Icono del botón.
 * @property {string} href - URL a la que redirige el botón.
 * @property {ThemeColor} color - Color del botón.
 * @property {ThemeSize} size - Tamaño del botón.
 * @property {ButtonStyle} button - Estilo del botón.
 * @property {boolean} disabled - Indica si el botón está deshabilitado.
 * @property {boolean} loading - Indica si el botón está cargando.
 * @property {boolean} fullWidth - Indica si el botón ocupa todo el ancho.
 * @property {boolean} iconFilled - Indica si el icono del botón está relleno.
 *
 * @fires click - Se dispara cuando se hace click en el botón.
 */
export class WcButtonViewModel extends LitElement {
  @property({ type: String }) public label: string = '';
  @property({ type: String }) public icon: string = '';
  @property({ type: String }) public href?: string;
  @property({ type: String, reflect: true }) public color: ThemeColor = THEME_COLORS.PRIMARY;
  @property({ type: String, reflect: true }) public size: ThemeSize = THEME_SIZES.MD;
  @property({ type: String, reflect: true }) public button: ButtonStyle = BUTTON_STYLES.FILLED;
  @property({ type: Boolean, reflect: true }) public disabled: boolean = false;
  @property({ type: Boolean, reflect: true }) public loading: boolean = false;
  @property({ type: Boolean, reflect: true }) public fullWidth: boolean = false;
  @property({ type: Boolean, reflect: true }) public iconFilled: boolean = false;
  @query('.button') protected buttonElement!: Promise<HTMLElement>;
}
