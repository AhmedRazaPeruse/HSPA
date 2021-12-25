import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})

export class PropertyCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Using Decorater //@Input() property_name : any
  //Get Data From Child to Parent Component By Using Decorater
  //@Input() property_name : any

  @Input() property : any

}
