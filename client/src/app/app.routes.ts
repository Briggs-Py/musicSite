import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { MusicAppComponent } from './music-app/music-app.component';
import { HomeComponent } from './music-app/home/home.component';
import { AboutComponent } from './music-app/about/about.component';
import { MusicComponent } from './music-app/music/music.component';
import { VideoComponent } from './music-app/video/video.component';
import { GigsComponent } from './music-app/gigs/gigs.component';
import { ContactComponent } from './music-app/contact/contact.component';

const APP_ROUTES: Routes=[
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'music', component: MusicComponent },
  { path: 'video', component: VideoComponent },
  { path: 'gigs', component: GigsComponent },
  { path: 'contact', component: ContactComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES)
