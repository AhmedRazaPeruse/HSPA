import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  //pass data child to parent
  //Ename : string = "Bharia Builder Authority"

  properties: Array<any>;

  constructor(private HousingService: HousingService) { }

  ngOnInit(): void {

    this.HousingService.getAllProperties().subscribe(
      data=>{
        this.properties=data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }
}
