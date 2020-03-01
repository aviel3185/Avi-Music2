import { Song } from './../models/song';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor() { }

  getAll(): Promise<Song[]> {
    return Promise.resolve([]);
  }
}
