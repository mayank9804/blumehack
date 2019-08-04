import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

declare var tableau;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _authService:AuthService){
    // this.initViz()
  }
  title = 'Milkbasket Dashboard';
  authenticated;
  custid;
  ngOnInit(){
    this.authenticated = this._authService.isAuthenticated()
    
    
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("Done by ngdocheck");
    
    this.authenticated = this._authService.isAuthenticated()
    this.custid = localStorage.getItem('id')
    // if(this.authenticated==false)
    //   this.signout()
    
  }
  
  public signout() {
    this._authService.removeToken()
  }

  initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = 'https://tableau-stage.mediaiqdigital.com/t/Test/views/test/Dashboard1'
    
    console.log(url);
    
    var viz = new tableau.Viz(containerDiv, url);
  }


}
