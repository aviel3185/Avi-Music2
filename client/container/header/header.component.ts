import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public volume = 50;
  public breadCrumbs = [];

  public get volumeIcon() {
    if (this.volume === 0) {
      return '../../assets/mute.svg';
    } else if (this.volume < 100) {
      return '../../assets/medium-volume.svg';
    }
    return '../../assets/high-volume.svg';
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(params => {
      if (params instanceof NavigationEnd) {
        this.breadCrumbs = params.urlAfterRedirects.replace('%20', ' ').split('/').splice(1);
      }
    });
  }

}
