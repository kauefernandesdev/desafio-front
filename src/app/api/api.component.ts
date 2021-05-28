import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent {
  public apiData = this.service.getTrackFeatures();
  public trackLikeds: number[] = [];
  constructor(private service: ApiService) {}

  countLike(track: any) {
    if (this.trackLikeds.includes(track.id)) {
      /* Remove like */
      this.trackLikeds = this.trackLikeds.splice(track.id, 1);
      track.like = track.like - 1;
    } else {
      this.trackLikeds.push(track.id);
      track.like = track.like + 1;
    }
  }

  alertShare() {
    window.alert('Track compartilhada com sucesso!');
  }
  alertDownload() {
    window.alert('Download realizado com sucesso!');
  }
}
