import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_modules/user';
import { faUser, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit() {
  }

}
