import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  constructor(private _dataService:DataService) { }

  products:any;
  ctr;
  ngOnInit() {
    this.ctr = 1;
    
    this.products = []
    this._dataService.getRecommendations(localStorage.getItem('id')).subscribe((res)=>{
      this.products = res
      console.log(this.products);
      
    },err=>{
      console.log(err);
      
    },() => {
      console.log("Done");
      
    })

  }

}
