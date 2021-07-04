import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pwd'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pwd');
  });

  it(`should have clearAll`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.clearAll();
    expect(app.length).toEqual(0);
    expect(app.useLetters).toEqual(false);
    expect(app.useNumbers).toEqual(false);
    expect(app.useSymbols).toEqual(false);
    expect(app.password).toEqual(null);
  });

  it(`should have checkGenerate for isGenerateDisabled to false`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.length = 5;
    app.useLetters = true;
    app.checkGenerate();
    expect(app.isGenerateDisabled).toEqual(false);
  });

  it(`should have checkGenerate for isGenerateDisabled to true`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.length = 0;
    app.useLetters = true;
    app.checkGenerate();
    expect(app.isGenerateDisabled).toEqual(true);
  });

  it(`should have onChangeUseLetters and onChangeUseNumbers and onChangeUseSymbols`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.useLetters = false;
    app.useNumbers = false;
    app.useSymbols = false;
    app.onChangeUseLetters();
    app.onChangeUseNumbers();
    app.onChangeUseSymbols();
    expect(app.useLetters).toEqual(true);
    expect(app.useNumbers).toEqual(true);
    expect(app.useSymbols).toEqual(true);
  });

  it(`should have onChangeLength for numbers`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onChangeLength("5")
    expect(app.length).toEqual(5);
  });

  it(`should have onChangeLength for string`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onChangeLength("a")
    expect(app.length).toEqual(0);
  });

  it(`should have onButtonClick`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.useLetters = true;
    app.useNumbers = true;
    app.useSymbols = true;
    app.length = 5;
    app.onButtonClick();
    expect(typeof app.password).toBe('string');
  });

  it(`should have onButtonClick false`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.useLetters = false;
    app.useNumbers = false;
    app.useSymbols = false;
    app.length = 0;
    app.onButtonClick();
    expect(app.password).toEqual('');
  });
});
