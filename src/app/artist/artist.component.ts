import { Component, OnInit } from '@angular/core';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  private artist: any;
  
    constructor(private jsonp: Jsonp,
                private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&callback=JSONP_CALLBACK`)
            .toPromise()
            .then(res => {
              console.log(res.json());
              this.artist = res.json().results[0];
              console.log(this.artist);
            });
      });
    }
  }
