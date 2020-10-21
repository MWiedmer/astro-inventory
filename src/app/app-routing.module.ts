import { NgModule } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { OcularsComponent } from './oculars/oculars.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'oculars', component: OcularsComponent },
	{ path: 'home', component: LandingpageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
