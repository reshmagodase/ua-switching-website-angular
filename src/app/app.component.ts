
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var ga: Function;



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    
    constructor(private router: Router) {
       
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {

            if (typeof ga === 'function') {
                if (evt instanceof NavigationEnd) {
                    console.log(evt.urlAfterRedirects);
                    console.log(evt.url);
                    ga('set', 'page', evt.urlAfterRedirects);
                    ga('send', 'pageview');
                }
            }
            if (!(evt instanceof NavigationEnd)) {
                return;
            }

            var scrollToTop = window.setInterval(function () {
                var pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 20); // how far to scroll on each step
                } else {
                    window.clearInterval(scrollToTop);
                }
            }, 16); // how fast to scroll (this equals roughly 60 fps)
        });
    }
}
