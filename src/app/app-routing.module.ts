import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TosComponent } from './tos/tos.component';
import { ExamplesPricingComponent } from './examples-pricing/examples-pricing.component';
import { ToImplementComponent } from './to-implement/to-implement.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tos', component: TosComponent },
  { path: 'examples-pricing', component: ExamplesPricingComponent },
  { path: 'to-implement', component: ToImplementComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
