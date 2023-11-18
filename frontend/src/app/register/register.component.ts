import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOneproduct(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.productForm.patchValue({
        product_id:res.data[0].product_id,
        product_name:res.data[0].product_name,
        product_brand:res.data[0].product_brand,
        price:res.data[0].price,
        

      });
    });
  }
  }

  productForm = new FormGroup({
    product_id: new FormControl('', Validators.required),
    product_name: new FormControl('', Validators.required),
    product_brand: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    
  });

  //to create a new student
  productSubmit(){
    if(this.productForm.valid){
      console.log(this.productForm.value);
      this.service.createproduct( this.productForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.productForm.reset();
        this.successmsg = 'Add Product Successful';
      });

    }
    else{
      this.errormsg = 'Add Product Unsuccessful';
    }

  }
//to update a student
productUpdate()
{
  console.log(this.productForm.value,'updatedform');

  if(this.productForm.valid)
  {
    this.service.updateproduct(this.productForm.value,this.getparamid).subscribe((res)=>{
      console.log(res,'resupdated');
      this.successmsg = res.message;

    })
  }
  else
  {
    this.errormsg = 'invalid';
  }
}
}