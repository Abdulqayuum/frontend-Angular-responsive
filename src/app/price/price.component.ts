import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent implements OnInit, AfterViewInit {



ngOnInit(): void {
  
}
ngAfterViewInit(): void {
  // Select all elements with the class 'card'
  const cards = document.querySelectorAll<HTMLElement>('.card');

  // Iterate over each card element
  cards.forEach((item) => {
    // Add an event listener for the 'mouseover' event
    item.addEventListener('mouseover', () => {
      // Remove the 'active' class from all card elements
      cards.forEach((el) => el.classList.remove('active'));
      // Add the 'active' class to the current card element
      item.classList.add('active');
    });
  });
}


}
