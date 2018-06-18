import { Component } from '@angular/core';
import {TimesServiceService} from "./times-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(time: TimesServiceService){
    time.getTimers().subscribe(data => {
      console.log(data)
    })
  }
}
