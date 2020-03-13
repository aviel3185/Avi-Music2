import { MusicService } from './../../services/music.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playing-now',
  templateUrl: './playing-now.component.html',
  styleUrls: ['./playing-now.component.scss']
})
export class PlayingNowComponent implements OnInit {

  constructor(public musicService: MusicService) { }

  ngOnInit(): void {
  }

}
