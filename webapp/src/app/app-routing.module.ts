import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HogeComponent } from './hoge/hoge.component';
import { FugaComponent } from './fuga/fuga.component';

const routes: Routes = [
  {path: 'hoge', component: HogeComponent},
  {path: 'fuga', component: FugaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
