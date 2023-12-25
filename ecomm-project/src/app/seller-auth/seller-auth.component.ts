import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller : SellerService) { }

  ngOnInit(): void {
  }

  signUp(data : SignUp) : void
  {
      console.log(data);
      this.seller.userSignUp(data);
  }

}
