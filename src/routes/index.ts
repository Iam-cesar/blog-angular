import { Routes } from '@angular/router';
import { SignInComponent } from 'src/app/components/auth/signin/signin.component';
import { SignUpComponent } from 'src/app/components/auth/signup/signup.component';
import { MyContentComponent } from 'src/app/components/author/my-content/my-content.component';
import { BrowseComponent } from 'src/app/components/browse/browse.component';
import { PostComponent } from 'src/app/components/post/post.component';
import { WriteComponent } from 'src/app/components/author/write/write.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'author/write',
    pathMatch: 'full',
  },
  {
    path: 'browse',
    component: BrowseComponent,
  },
  {
    path: 'author/my-content',
    component: MyContentComponent,
  },
  {
    path: 'author/write',
    component: WriteComponent,
  },
  {
    path: 'auth/signin',
    component: SignInComponent,
  },
  {
    path: 'auth/signup',
    component: SignUpComponent,
  },

  {
    path: 'post/:id',
    component: PostComponent,
  },
];

export { routes };
