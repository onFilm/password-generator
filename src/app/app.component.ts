import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'pwd';
  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  password = '';
  isGenerateDisabled = true;

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    // finally assigning the password
    this.password = generatedPassword;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      this.checkGenerate();
    } else {
      this.length=0;
      this.isGenerateDisabled = true;
    }
  }
  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
    this.checkGenerate();
  }
  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
    this.checkGenerate();
  }
  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
    this.checkGenerate();
  }

  checkGenerate() {
    if (this.length > 0 && (this.useNumbers || this.useLetters || this.useSymbols)) {
      this.isGenerateDisabled = false;
    } else {
      this.isGenerateDisabled = true;
    }
  }

  clearAll() {
    this.length = 0;
    this.useLetters = false;
    this.useNumbers = false;
    this.useSymbols = false;
    this.password = '';
  }
}
