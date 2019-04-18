import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ThemeDirective } from './theme.directive';
import { ThemeService } from '../services/theme.service';
import { BehaviorSubject } from 'rxjs';
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

@Component({
  selector: 'app-btn',
  template: `
    <button [appTheme]="{ background: 'accent', color: 'textHigh' }"></button>
  `
})
export class TestComponent {
  constructor() {}
}

export class MockThemeService {
  public theme$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(THEME_A);
}

describe('ThemeDirective Test', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let compiled: HTMLElement;
  let button: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeDirective, TestComponent],
      providers: [
        {
          provide: ThemeService,
          useClass: MockThemeService
        }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    button = compiled.querySelector('button');
  }));

  it('should create', async(() => {
    expect(component).toBeDefined();
  }));

  it('should apply the styles on load', () => {
    fixture.detectChanges();

    expect(button.style.background).toEqual(THEME_A.accent);
    expect(button.style.color).toEqual(THEME_A.textHigh);
  });

  it('should apply the styles when the theme changes', () => {
    const themeService: ThemeService = TestBed.get(ThemeService);

    // Change theme to THEME_B
    themeService.theme$.next(THEME_B);
    fixture.detectChanges();

    // Expect styling to be changed to THEME_B
    expect(button.style.background).toEqual(THEME_B.accent);
    expect(button.style.color).toEqual(THEME_B.textHigh);
  });
});
