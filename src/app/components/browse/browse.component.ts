import { Component, OnInit } from '@angular/core';
import { BrowseService } from './browse.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  public posts: PostEntity[] = [];

  constructor(private browseService: BrowseService) {}

  ngOnInit(): void {
    this.browseService.getPosts()?.subscribe(posts => (this.posts = posts));
  }
}
