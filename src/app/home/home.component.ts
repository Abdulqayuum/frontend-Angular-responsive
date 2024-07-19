import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionsComponent } from '../sections/sections.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,
    SectionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  model = {
    left: true,
    middle: false,
    right: false
};

focus: any;
focus1: any;
constructor() { }

ngOnInit() {}
}
