import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length =0;
  useLetters= false;
  useNumbers= false;
  useSymbols= false;
  password = '';
 
  onButtonClick() {
    console.log(`The selected options are
    Password length: ${this.length}
    Include letters: ${this.useLetters}
    Include numbers: ${this.useNumbers}
    Include symbols: ${this.useSymbols}
    `);

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars ='';
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
    for (let i=0; i< this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword +=validChars[index];
    }

    // finally assigning the password
    this.password = generatedPassword;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }
  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }
  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }
}
