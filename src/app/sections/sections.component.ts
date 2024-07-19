import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PriceComponent } from '../price/price.component';
import { OurServicesComponent } from '../our-services/our-services.component';


@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgbModule,
    PriceComponent,
    OurServicesComponent
  ],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.scss'
})
export class SectionsComponent implements OnInit{
  focus:any;
  focus1:any;
  constructor() { }

  ngOnInit() {
  }
}
