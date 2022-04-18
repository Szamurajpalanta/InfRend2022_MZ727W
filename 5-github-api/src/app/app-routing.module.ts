import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
  { path: 'user-search', component: UserSearchComponent },
  { path: 'user-detail/:id', component: UserDetailsComponent },
  { path: 'repo-search', component: RepoSearchComponent },
  { path: 'repo-detail/:id', component: RepoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
