import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HelloWorldService {
  private service: HttpClient;

  constructor(param_service: HttpClient) {
    this.service = param_service;
  }

  public getHelloWorld(): Observable<string> {
    const obs1: Observable<any> = this.service.get('assets/data.json');

    const treatment = (param_data: any) => {
      return param_data.msg as string;
    };

    return obs1.pipe(map(treatment));
  }
}
