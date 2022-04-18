import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() githubProfile!:User;
  isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeVisibility() {
    if (this.isVisible) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }

}
