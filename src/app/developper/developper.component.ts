import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrl: './developper.component.css',
})
export class DevelopperComponent implements OnInit {
  developper: Developer = new Developer(
    'Code',
    'Jame',
    37,
    'male',
    'my name is Code... James Code',
    []
  );

  constructor() {}

  ngOnInit(): void {
    const firstSkill = new Skill('JAVA', '../assets/java.png', 'JAVA');
    const secondSkill = new Skill('Spring', '../assets/spring.png', 'Spring');
    this.developper.firstName;
    this.developper.lastName;
    this.developper.age;
    this.developper.gender;
    this.developper.bio;
    this.developper.skills?.push(firstSkill);
    this.developper.skills?.push(secondSkill);
  }
}
