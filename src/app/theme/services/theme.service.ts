import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Theme } from '../models/theme.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public themes: { [themeName: string]: Theme } = {
    red: {
      textHigh: 'rgb(0, 0, 0)',
      textLow: 'rgba(0, 0, 0, .75)',
      accent: 'rgb(255, 0, 0)',
      bg: 'rgb(239, 239, 239)'
    },
    blue: {
      textHigh: 'rgb(255, 255, 255, 1)',
      textLow: 'rgba(255, 255, 255, .75)',
      accent: 'rgb(43, 93, 203)',
      bg: 'rgb(0, 0, 0)'
    },
    orange: {
      textHigh: 'rgba(0, 0, 0)',
      textLow: 'rgba(0, 0, 0, .75)',
      accent: 'rgb(255, 99, 71)',
      bg: 'rgb(255, 255, 0)'
    }
  };

  public theme$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(
    this.themes.red
  );

  constructor() {}

  public setTheme(theme: Theme): void {
    this.theme$.next(theme);
  }

  public setThemeName(themeName: string): void {
    if (this.themes[themeName]) {
      this.setTheme(this.themes[themeName]);
    } else {
      throw new Error(`Could not find theme with name ${themeName}`);
    }
  }
}
