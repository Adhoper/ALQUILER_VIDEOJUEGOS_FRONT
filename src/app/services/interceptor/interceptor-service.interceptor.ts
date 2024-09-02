import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';

export const InterceptorService: HttpInterceptorFn = (req, next) => {
  const localToken = localStorage.getItem('token');

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${localToken}`
    }
  });

  // Pass the cloned request with the updated header to the next handler
  return next(authReq);
};

