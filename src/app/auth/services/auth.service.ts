import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  register(data: RegisterRequestInterface):Observable<CurrentUserInterface>{
    const url = 'https://conduit.productionready.io/api/users'
    return this.http
    .post<AuthResponseInterface>(url,data)
    .pipe(map((res:AuthResponseInterface)=>res.user))
  }
}
