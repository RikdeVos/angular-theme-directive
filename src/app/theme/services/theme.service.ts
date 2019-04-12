import { Injectable } from '@angular/core';
import { Theme } from '../models/theme.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes: { [themeName: string]: Theme } = {
    red: {
      textHigh: 'rgba(0,0,0,1)',
      textLow: 'rgba(0,0,0,.75)',
      accent: 'red',
      bg: '#efefef'
    },
    blue: {
      textHigh: 'rgba(255,255,255,1)',
      textLow: 'rgba(255,255,255,.75)',
      accent: '#2B5DCB',
      bg: '#000'
    },
    orange: {
      textHigh: 'rgba(0,0,0,1)',
      textLow: 'rgba(0,0,0,.75)',
      accent: 'tomato',
      bg: 'yellow'
    }
  };

  public theme$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(
    this.themes.red
  );

  constructor() {}

  setTheme(themeName: string) {
    if (this.themes[themeName]) {
      this.theme$.next(this.themes[themeName]);
    } else {
      throw Error(`Could not find theme with name ${themeName}`);
    }
  }
}
