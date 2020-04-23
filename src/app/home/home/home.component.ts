import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interfaces/pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pet: Pet = {
    name: 'テストペット',
    exp: 200,
    level: 4,
    avatarURL: '/assets/images/pet-1.png',
  };

  constructor() {}

  ngOnInit(): void {}
}
