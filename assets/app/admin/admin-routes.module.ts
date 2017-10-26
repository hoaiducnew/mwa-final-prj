import { AdminGuard } from './guard/admin-guard.service';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { AuctionListComponent } from './auction-list.component';
import { Routes, RouterModule } from '@angular/router';

export const ADMIN_ROUTES: Routes = [

  {
    path: 'admin/auctionList',
    component: AuctionListComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/userList',
    component: UserListComponent,
    canActivate: [AdminGuard]
  } 
];

@NgModule({ 
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
   exports: [RouterModule]
   }) 
export class AdminRoutesModule {}
