import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  productForm = new FormGroup({
    'product_id': new FormControl('', Validators.required),
    'product_name': new FormControl('', Validators.required),  // Corrected property name
    'product_brand': new FormControl('', Validators.required),
    'price': new FormControl('', Validators.required),
  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOneproduct(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.productForm.patchValue({
          product_id:res.data[0].product_id,
          product_name:res.data[0].product_name,
          product_brand:res.data[0].product_brand,
          price:res.data[0].price,
            

        });
      });
  }
//to update a student
productUpdate()
{
  console.log(this.productForm.value);
    this.service.updateproduct(this.router.snapshot.params['id'], this.productForm.value).subscribe((result:any)=>{

    this.productForm.reset();
    this.successmsg = 'Profile successfully updated';
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}
