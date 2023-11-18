import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-viewshop',
  templateUrl: './viewshop.component.html',
  styleUrls: ['./viewshop.component.css']
})
export class ViewshopComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  listData: any;
  successmsg: any;

  ngOnInit(): void {
    this.getallregister(); // Updated method name
  }

  // get delete id
  deleteId(id: any) {
    console.log(id, 'deleteid==>');
    this.service.deleteregister(id).subscribe((res) => { // Updated method name
      console.log(res, 'deleteres==>');
      this.successmsg = "Delete shop profile successful!"; // Updated success message
      this.getallregister(); // Updated method name
    });
  }

  // get shop // Updated method name
  getallregister() {
    this.service.getAllregister().subscribe((res) => { // Updated method name
      console.log(res, "res==>");
      this.listData = res.data;
    });
  }
}