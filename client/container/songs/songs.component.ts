import { SongsService } from './../../services/songs.service';
import { Component, OnInit } from '@angular/core';
import { Song } from 'client/models/song';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  public songs: Song[];

  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
    this.getSongs();
  }

  async getSongs() {
    this.songs = await this.songsService.getAll();
  }

}
