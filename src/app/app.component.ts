import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from './hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularServicesRetourExercice';
  private service: HelloWorldService;

  constructor(param_service: HelloWorldService) {
    this.service = param_service;
  }
  ngOnInit(): void {
    this.service.getHelloWorld().subscribe((param_msg: string) => {
      this.title = param_msg;
    });
  }
}
