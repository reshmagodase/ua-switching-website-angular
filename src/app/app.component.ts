
import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
declare var ga: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    param1Value :any;
    param2Value:any;
    
    theme1: boolean = false;
    theme2: boolean = true;

    cssFile: string = 'style.css';

    // loadAdditionalStyles: boolean = true; // Set this variable based on your condition
    // defaultStyleUrls: string[] = ['./app.component.css']; // Default stylesheets for your component
    // additionalStyleUrls: string[] = ['assets/style1.css', 'assets/style2.css']; // Additional stylesheets based on the condition
    // document: any;
  

    constructor(private router: Router ,private activatedRoute: ActivatedRoute , private renderer: Renderer2) 
    {}
    ngOnInit() {
        if (this.theme1) {
            const styleLink1 = this.renderer.createElement('link');
            this.renderer.setAttribute(styleLink1, 'rel', 'stylesheet');
            this.renderer.setAttribute(styleLink1, 'href', 'assets/style1.css');
            this.renderer.appendChild(document.head, styleLink1);
        }
        else if(this.theme2){
            const styleLink2 = this.renderer.createElement('link');
            this.renderer.setAttribute(styleLink2, 'rel', 'stylesheet');
            this.renderer.setAttribute(styleLink2, 'href', 'assets/style2.css');
            this.renderer.appendChild(document.head, styleLink2);
          }
          else{
            console.log("in else");
          }

        // if (this.theme1 === true) {
        //     // import './assets/css/common1.css'; 
        //   } else {
        //     // import './assets/css/common2.css'; 
        //   }


        // if(this.theme1){
        //     this.document.getElementById('theme').setAttribute('href','assets/style1.css');
        // }
        // else{
        // }

        // this.styleUrls();

        // if (this.theme1) {
        //     const styleLink1 = this.renderer.createElement('link');
        //     this.renderer.setAttribute(styleLink1, 'rel', 'stylesheet');
        //     this.renderer.setAttribute(styleLink1, 'routerLink', 'src/style1.css');
        //     this.renderer.appendChild(document.head, styleLink1);
        //   }else
        //   {
        //     const styleLink1 = this.renderer.createElement('link');
        //     this.renderer.setAttribute(styleLink1, 'rel', 'stylesheet');
        //     this.renderer.setAttribute(styleLink1, 'href', 'src/style2.css');
        //     this.renderer.appendChild(document.head, styleLink1);
        //   }
        //    if (this.theme2) {
           
        //   }

        // if(option == this.theme1){

        // }
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
      
//    get styleUrls() {
//         return this.loadAdditionalStyles ? [...this.defaultStyleUrls, ...this.additionalStyleUrls] : this.defaultStyleUrls;
//       }
}
