import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import { SignUp } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient , private router : Router) { }

  userSignUp(data : SignUp )
  {
    return this.http.post('http://localhost:3000/seller', data).subscribe((result) =>{
       console.log(result);
       if(result){
             this.router.navigate(['seller-home']);
       }
    })
  }
}
