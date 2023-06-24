import { Component } from '@angular/core';
import postsMock from './posts.mock';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent {
  posts = postsMock();
}
