import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  photoUrl: string;

  constructor(public authService: AuthService, private alertify: AlertifyService, private routers: Router) { }

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Bienvenue');
    }, error => {
      this.alertify.error('VOUS NE PASSEREZ PAS !!!');
    }, () => {
      this.routers.navigate(['/members']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('déconnecté(e)');
    this.routers.navigate(['/home']);
  }

}
