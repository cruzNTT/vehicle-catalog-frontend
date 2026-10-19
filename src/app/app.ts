import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  template: '<router-outlet/>',
})
export class App {
  protected readonly title = signal('vehicle-catalog-frontend');
  httpClient = inject(HttpClient);

  constructor() {
    this.httpClient.get("/cars").subscribe(res=>{console.log(res)})
  }
}
