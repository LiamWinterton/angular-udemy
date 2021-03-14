import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.sass']
})
export class AssignmentComponent implements OnInit {
  username;
  usernameValid = false;

  constructor() { }

  ngOnInit(): void {
  }

  onUsernameChange(event) {
    this.usernameValid = event.target.value.length !== 0;
  }

  onAddUsername() {
    this.username = '';
    this.usernameValid = false;
  }

}
