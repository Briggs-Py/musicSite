import { Component, OnInit } from '@angular/core';
import { MusicAppService } from '../music-app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: any;
  constructor(private _musicAppService: MusicAppService,) { }

  ngOnInit() {
    this.allEvents();
  }
  allEvents(){
    this._musicAppService.allEvents()
    .then( (response)=>this.events=response)
    .then( (response)=>this.events=response.sort(function(a, b) {
        a = new Date(a.date);
        b = new Date(b.date);
        return b>a ? -1 : b<a ? 1 : 0;
    }))
    .catch( (err)=>console.log(err) )
  }
}
