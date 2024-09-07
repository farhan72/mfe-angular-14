import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const MFE_APP_URL = 'http://localhost:4201/remoteEntry.js';
const MFE2_APP_URL = 'http://localhost:4202/remoteEntry.js';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: MFE_APP_URL,
      exposedModule: './LoginModule'
    }).then(m => m.LoginModule).catch(e => console.log(e))
  },
  {
    path: 'login2',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: MFE2_APP_URL,
      exposedModule: './Login2Module'
    }).then(m => m.LoginModule).catch(e => console.log(e))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
