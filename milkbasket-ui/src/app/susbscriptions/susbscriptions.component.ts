import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { Directive, Output, EventEmitter, Input, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-susbscriptions',
  templateUrl: './susbscriptions.component.html',
  styleUrls: ['./susbscriptions.component.css']
})
export class SusbscriptionsComponent implements OnInit {
  

  constructor(private _dataService:DataService) { }
  
  alreadySubscribed = []
  subscriptionSuggestions = []
  discounts= [];
  start:any;

  ngOnInit() {
    
    this.start = 1
    this._dataService.alreadySubscribed(localStorage.getItem('id')).subscribe((res)=>{

      this.alreadySubscribed = res
      },(err)=>{
          console.log(err);
      },()=>{
          console.log("COMPLETED");
      })

      this._dataService.subscriptionSuggestions(localStorage.getItem('id')).subscribe((res)=>{
        console.log(res);
        if(!res)
          return
        this.subscriptionSuggestions = res['product_suggestions']
        this.discounts = res['discount_trust_index']
        this.discounts = this.discounts.map(e=>Math.round(e))
        console.log(this.subscriptionSuggestions);
        console.log(this.discounts);
        
        
        },(err)=>{
            console.log(err);
        },()=>{
            console.log("COMPLETED");
        })
      
    }
}
