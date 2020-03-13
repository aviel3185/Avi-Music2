import { SongUploadComponent } from './song-upload/song-upload.component';
import { SongsComponent } from './songs/songs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'allSongs', pathMatch: 'full' },
  { path: 'allSongs', component: SongsComponent },
  { path: 'Playlist/:name', component: SongsComponent },
  { path: 'Genre/:name', component: SongsComponent },
  { path: 'Song Upload', component: SongUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
