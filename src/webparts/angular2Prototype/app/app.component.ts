import { Component } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: '/src/webparts/angular2Prototype/app/appform.html'
})

export class AppComponent {
    private name: string = ': Please enter your name above';
    changeName(inputVal): void {
        this.name = inputVal;
    }
}