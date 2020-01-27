import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReleasesListComponent } from './components/releases-list/releases-list.component';

const routes: Routes = [
  { path: 'releases', component: ReleasesListComponent },
  { path: '', component:   ReleasesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
