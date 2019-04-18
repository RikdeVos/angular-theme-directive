import { TestBed, async } from '@angular/core/testing';
import { ThemeService } from './theme.service';
import { Theme } from '../models/theme.interface';

const THEME_A: Theme = {
  textHigh: 'rgb(255, 0, 0)',
  textLow: 'rgb(240, 240, 240)',
  accent: 'rgb(255, 0, 0)',
  bg: 'rgb(16, 16, 16)'
};

const THEME_B: Theme = {
  textHigh: 'rgb(0, 255, 0)',
  textLow: 'rgba(0,0,0,.75)',
  accent: 'rgb(255, 255, 0)',
  bg: 'rgb(18, 18, 18)'
};

describe('ThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const themeService: ThemeService = TestBed.get(ThemeService);
    expect(themeService).toBeTruthy();
  });

  it('should be able to change theme', async(async () => {
    const themeService: ThemeService = TestBed.get(ThemeService);

    themeService.setTheme(THEME_A);
    expect(await themeService.theme$.toPromise()).toEqual(THEME_A);

    themeService.setTheme(THEME_B);
    expect(await themeService.theme$.toPromise()).toEqual(THEME_B);
  }));

  it('should change theme when changing theme name', async(() => {
    const themeService: ThemeService = TestBed.get(ThemeService);

    const spy = spyOn(themeService, 'setTheme');
    themeService.setThemeName('blue');

    expect(spy).toHaveBeenCalledWith(themeService.themes.blue);
  }));
});
