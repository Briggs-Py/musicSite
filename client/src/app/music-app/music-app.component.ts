import { Component, OnInit } from '@angular/core';
import { MusicAppService } from './music-app.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-music-app',
  templateUrl: './music-app.component.html',
  styleUrls: ['./music-app.component.css']
})
export class MusicAppComponent implements OnInit {
  events: any;
  constructor(private _musicAppService: MusicAppService) { }

  ngOnInit() {
    this.allEvents();
  }

  ngAfterViewInit(): void {
   $('.cross').hide();
   $( ".menu" ).hide();
   $( ".hamburger" ).click(function() {
     $("body").css("background-color", "rgba(0, 0, 0, 0.9)");
     $( ".menu" ).slideToggle( "slow", function() {
       $( ".hamburger" ).hide();
       $( ".cross" ).show();
     });
   });

   $( ".cross" ).click(function() {
     $("body").css("background-color", "rgba(0, 0, 0, 0.0)");
     $( ".menu" ).slideToggle( "slow", function() {
       $( ".cross" ).hide();
       $( ".hamburger" ).show();

     });
   });
 }

  toggleTitle(){

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
