import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
declare var gtag;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const navEndEvent$ = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      );
      
      navEndEvent$.subscribe((event: NavigationEnd) => {
        gtag('config', 'UA-153566126-1', { page_path: event.urlAfterRedirects });
      });
    }
  }
}
