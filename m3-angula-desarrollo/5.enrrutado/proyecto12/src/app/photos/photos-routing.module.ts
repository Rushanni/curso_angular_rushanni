import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


{
  path:'', redirectTo: 'photos-gallery', pathMatch: 'full'
},
{
  path:'**', redirectTo: 'photos-detail', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
