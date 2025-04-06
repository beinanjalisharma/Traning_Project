import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Request } from 'express';

@Injectable()
export class ApiRouteInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<Request>, next: HttpHandler): Observable<HttpEvent<any>> {
        let modifiedReq = req;
        let token = '';

        try {
            // Check if 'userData' cookie exists and is not empty
            if (localStorage.getItem('token')) {
                const cookieData = localStorage.getItem('token')?.trim();
                // console.log(cookieData);
                
                if (cookieData) {
                    // const userData = JSON.parse(cookieData);
                    token = cookieData || ''; // Extract token safely
                }
            }
        } catch (error) {
            console.error('Error parsing userData from cookies:', error);
        }
        // this.toastrService.success(`User Token: ${token}`);
        // console.log("From route interceptor: ", token);

        if (token) {
            modifiedReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("Interceptor laddoo:",modifiedReq);
            
        }

        return next.handle(modifiedReq).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    console.error('Unauthorized request - redirecting to Login');
                    // Optionally, you can clear cookies and redirect to login
                    localStorage.removeItem('token');
                    // window.location.href = '/login'; // Uncomment if you want to redirect
                }
                return throwError(() => error);
            })
        );
    }
}
