import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ProductsComponent } from './products/products.component';

import { EventsComponent } from './events/events.component';

import { FriendsComponent } from './friends/friends.component';

import { CommunitiesComponent } from './communities/communities.component';

import { MessagesComponent } from './messages/messages.component';

import { NotificationsComponent } from './notifications/notifications.component';



const routes: Routes = [

{path: 'home', component: HomeComponent},
{path:'products', component: ProductsComponent},
{path: 'events', component: EventsComponent},
{path:'communities', component: CommunitiesComponent},
{path:'friends', component: FriendsComponent},
{path:'messages', component: MessagesComponent},
{path:'notifications', component:NotificationsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
