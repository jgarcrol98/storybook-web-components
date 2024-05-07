import { ColorTheme } from './css/color-theme.css';
import { FontTheme } from './css/font-theme.css';
import { MaterialOverridesTheme } from './css/material-overrides-theme.css';
import { ZIndexTheme } from './css/z-index-theme.css';

export class WcTheme {
  private static readonly styles = [
    ...ColorTheme.ColorTheme,
    ...FontTheme.FontTheme,
    ...ZIndexTheme.ZIndexTheme,
    ...MaterialOverridesTheme.MaterialOverridesTheme,
  ];

  private static readonly links = [
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL@20..48,100..700,0..1',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL@20..48,100..700,0..1',
  ];

  public loadStyles(): void {
    this.loadTagStyles();
    this.loadLinks();
  }

  private loadTagStyles(): void {
    if (document.getElementById('wc-theme')) {
      return;
    }
    const element = document.createElement('style');
    element.setAttribute('id', 'wc-theme');
    element.innerHTML = [...WcTheme.styles].join(' ');
    document.head.appendChild(element);
  }

  private loadLinks(): void {
    WcTheme.links.forEach(link => {
      if (!document.querySelector(`link[href="${link}"]`)) {
        const element = document.createElement('link');
        element.setAttribute('href', link);
        element.setAttribute('rel', 'stylesheet');
        document.head.appendChild(element);
      }
    });
  }
}
