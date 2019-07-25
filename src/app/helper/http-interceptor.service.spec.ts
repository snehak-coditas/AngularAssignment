
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class InterceptorExample implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
      
        const header: any = {
            'Content-Type': 'application/json',
        }

        const newRequest = request.clone({
            setHeaders: header
        });

        return next.handle(newRequest);
    }
}
