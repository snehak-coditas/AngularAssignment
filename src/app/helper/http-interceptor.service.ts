import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class InterceptorExample implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): import("/home/coditas/GitHub API Repository/Front-End-Assignment/node_modules/rxjs/internal/Observable").Observable<import("/home/coditas/GitHub API Repository/Front-End-Assignment/node_modules/@angular/common/http/http").HttpEvent<any>> {
    throw new Error("Method not implemented.");
  }

  constructor() { }
  

  
}
