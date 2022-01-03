import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId: any;
  constructor(private route: ActivatedRoute, private Route: Router) { }

  ngOnInit() {
    //const id = 'id';
    this.propertyId =+ this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params) => {
        this.propertyId =+ params['id'];
      }
    )

  }

  onSelectNext()
  {
    this.propertyId += 1;
    this.Route.navigate(['property-detail',this.propertyId])
  }

}
