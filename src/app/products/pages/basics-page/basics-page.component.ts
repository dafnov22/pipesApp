import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent implements OnInit {

  public nameLower: string = 'damian';
  public nameUpper: string = 'DAMIAN';
  public fullName: string = 'dAmIAn cAStIlLO';

  public customDate: Date = new Date(); //  Fecha actual del sistema (new Date())

  constructor() { }

  ngOnInit(): void {
  }

}
