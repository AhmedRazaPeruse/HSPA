import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  //pass data child to parent
  //Ename : string = "Bharia Builder Authority"

  SellRent = 1;
  properties: Array<IProperty> = [];

  constructor(private route: ActivatedRoute, private HousingService: HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.HousingService.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties=data;
        //console.log(data);
        //console.log(this.route.snapshot.url.toString())
      }, error => {
        console.log(error);
      }
    )
  }
}
