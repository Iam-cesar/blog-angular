import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import { WriteService } from './write.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/authService/auth.service';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WriteComponent implements OnInit {
  constructor(
    private writeService: WriteService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('auth/signin');
    }
  }

  protected editor: Editor = new Editor();

  protected toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  protected formData = new FormGroup({
    title: new FormControl('', Validators.required()),
    content: new FormControl('', Validators.required()),
  });

  protected isBtnSubmitDisabled =
    !this.formData.value.title ||
    !this.formData.value.content ||
    this.formData.value.content === '<p></p>';

  protected createPost() {
    this.writeService.createPost(this.formData.value)?.subscribe(post => {
      this.router.navigateByUrl(`post/${post.id}`);
    });
  }
}
