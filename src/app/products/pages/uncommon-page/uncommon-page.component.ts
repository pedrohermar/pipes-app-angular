import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Pedro'
  public gender: 'male' | 'female' = 'male'
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Rocío'
    this.gender = 'female'
  }

  //i18nPlural
  public clients: string[] = ['Pedro', 'Rocío', 'Begoña', 'Marcos', 'Iván', 'Adrián', 'Alejandro']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.pop()
  }

  //KeyValue
  public person = {
    name: 'Pedro',
    age: 30,
    address: 'España'
  }

  //Async
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500)
  })

}
