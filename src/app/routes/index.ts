import { Routes } from '@angular/router';
import { SigninComponent } from '../components/auth/signin/signin.component';
import { SignupComponent } from '../components/auth/signup/signup.component';
import { MyContentComponent } from '../components/author/my-content/my-content.component';
import { WriteComponent } from '../components/author/write/write.component';
import { BrowseComponent } from '../components/browse/browse.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'browse',
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
    path: 'auth/signin',
    component: SigninComponent,
  },
  {
    path: 'auth/signup',
    component: SignupComponent,
  },
  {
    path: 'write',
    component: WriteComponent,
  },
];

export { routes };
