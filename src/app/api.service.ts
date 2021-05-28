import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getTrackFeatures() {
    return this.http.get<
      {
        id: number;
        createdAt: number;
        name: string;
        thumbnail: HTMLImageElement;
        artist: string;
        like: number;
        comments: string;
        plays: number;
        feedback: string;
        strand: string;
      }[]
    >('https://60aebc555b8c300017deb2ac.mockapi.io/track');
  }

  constructor(private http: HttpClient) {}
}
