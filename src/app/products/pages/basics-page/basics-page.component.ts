import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'pedro'
  public nameUpper: string = 'PEDRO'
  public fullName: string = 'pEdRo HErNÁndEz'

}
