import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  session: Boolean = true;
  name: String;
  constructor(private router: Router) {



  }

  clearSession() {
    if (localStorage.getItem("userId") !== null) {
      this.session = true;
      this.name = localStorage.getItem("name");
      $(".session").show();
    }
    else {
      this.session = false;
      $(".session").hide();
    }
  }

  ngOnInit() {
    this.clearSession();
  }

  logout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
    this.clearSession();
    location.reload();
    this.router.navigate(['/']);
  }
}
