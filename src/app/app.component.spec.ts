import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';
import { BtnComponent } from './components/btn/btn.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, BtnComponent],
      imports: [ThemeModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
