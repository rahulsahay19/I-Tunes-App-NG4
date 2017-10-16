import { Component, OnInit } from '@angular/core';
import { Jsonp } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  albums: any[];
  
    constructor(private jsonp: Jsonp,
                private route: ActivatedRoute) {
      this.route.parent.params.subscribe(params => {
        this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=album&callback=JSONP_CALLBACK`)
            .toPromise()
            .then(res => {
              console.log(res.json());
              this.albums = res.json().results.slice(1);
            });
      });
    }
  }