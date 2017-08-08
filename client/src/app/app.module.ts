import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MusicAppService } from './music-app/music-app.service';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { MusicAppComponent } from './music-app/music-app.component';
import { HomeComponent } from './music-app/home/home.component';
import { AboutComponent } from './music-app/about/about.component';
import { MusicComponent } from './music-app/music/music.component';
import { VideoComponent } from './music-app/video/video.component';
import { GigsComponent } from './music-app/gigs/gigs.component';
import { ContactComponent } from './music-app/contact/contact.component';
import { FooterComponent } from './music-app/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicAppComponent,
    HomeComponent,
    AboutComponent,
    MusicComponent,
    VideoComponent,
    GigsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MusicAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
