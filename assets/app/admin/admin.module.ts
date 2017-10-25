import { AdminRoutesModule } from './admin-routes.module';
import { AdminService } from './admin.service';
import { AuctionListComponent } from './auction-list.component';
import { UserListComponent } from './user-list.component';
import { Property } from './../property/property.model';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutesModule
  ],
  declarations: [UserListComponent, AuctionListComponent],
  exports: [UserListComponent, AuctionListComponent],
  providers: [AdminService]
})
export class AdminModule { }