import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_modules/user';
import { faUser, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  faUser = faUser;
  faHeart = faHeart;
  faEnvelope = faEnvelope;

  @Input() user: User;

  constructor(private authService: AuthService,
              private userService: UserService,
              private alertify: AlertifyService) { }

  ngOnInit() {
  }

  sendLike(id: number) {
    this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
      this.alertify.success('Vous avez liké: ' + this.user.knownAs);
    }, error => {
      this.alertify.error('Vous liké déjà: ' + this.user.knownAs);
    });
  }

}
