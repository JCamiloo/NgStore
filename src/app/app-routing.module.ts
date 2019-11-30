import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './admin.guard';
/*
import { PreloadService } from './core/services/preload.service';
import { QuicklinkStrategy } from 'ngx-quicklink';
*/

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  },
  { 
    path: 'admin', 
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: '**', 
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    useHash: true,
    /*
    enableTracing: false,
    preloadingStrategy: QuicklinkStrategy,
    paramsInheritanceStrategy: 'always'
    */
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
