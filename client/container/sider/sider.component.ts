import { MusicService } from './../../services/music.service';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {
  public set isPrivateListening(value) {
    alert(value);
  }

  constructor(private readonly notifyService: NzMessageService, public readonly musicService: MusicService) { }

  ngOnInit(): void {
  }
  repeatSong() {
    this.musicService.repeatSong();
  }
}
