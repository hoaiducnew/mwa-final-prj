import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { AuctionListComponent } from './auction-list.component';
import { Routes, RouterModule } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'auctionList', pathMatch: 'full'
  },
  {
    path: 'auctionList',
    component: AuctionListComponent
  },
  {
    path: 'userList',
    component: UserListComponent
  }
 
];

@NgModule({ 
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
   exports: [RouterModule]
   }) 
export class AdminRoutesModule {}
