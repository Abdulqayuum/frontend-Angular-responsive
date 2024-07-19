import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  test : Date = new Date();
    focus: any;
    focus1: any;
    focus2: any;
    constructor() { }

    ngOnInit() {}
}
