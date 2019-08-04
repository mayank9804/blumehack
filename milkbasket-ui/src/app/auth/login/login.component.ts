import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _dataService:DataService,private _authService:AuthService) { }

  ngOnInit() {
  }

  renderItems = []

  customerId = ''

  filterItems(key) {

    if(key.length==0){
      this.renderItems = [];
      return
    }
    let count = 0;
    this.renderItems = this._dataService.customerIds.filter(e => {
      if(count<10){
        if(e.toString().startsWith(key)==true)
          count++;
        return e.toString().startsWith(key)==true
      }
      return false;
    })
  }

  setCustomerId(custId){
    this.customerId = custId;
  }
  clearBox(){
    this.renderItems = []
  }
  logMeIn() {
    this._authService.login(this.customerId)
  }
}
