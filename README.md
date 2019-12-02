# Angular Theme Directive

## Development server

Run `npm install` once to install. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Theme Directive

Apply the `[appTheme]` directive to components apply styling. You can pass an object as directive value. In this object the keys are CSS selectors, and the values are the theme properties. These properties update when the theme changes:

```
<h1 [appTheme]="{ color: 'textHigh' }">Hello World</h1>
```

Or pass multiple CSS properties:

```
<button [appTheme]="{ color: 'textLow', 'border-color': 'accent' }">Click</button>
```

## Theme Service

To switch theme to a pre-defined, call `ThemeService.setThemeName('red')` where 'red' is any of the available themes in the service. You can also select a custom theme by calling `ThemeService.setTheme({ ... })` with the Theme as variable.
