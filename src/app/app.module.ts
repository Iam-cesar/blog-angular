import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './components/browse/browse.component';
import { TopbarComponent } from './shared/components/organisms/topbar/topbar.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { WriteComponent } from './components/author/write/write.component';
import { MyContentComponent } from './components/author/my-content/my-content.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    TopbarComponent,
    SigninComponent,
    SignupComponent,
    WriteComponent,
    MyContentComponent,
    PostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
