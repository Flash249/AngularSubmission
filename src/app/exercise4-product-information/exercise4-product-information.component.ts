import { Exercise4ProductServiceService } from './../exercise4-product-service.service';
import { Component, OnInit } from '@angular/core';
import { ProductInfo } from '../Exercise4ProductInformation';

@Component({
  selector: 'app-exercise4-product-information',
  templateUrl: './exercise4-product-information.component.html',
  styleUrls: ['./exercise4-product-information.component.css']
})
export class Exercise4ProductInformationComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  message: string = '';
  // tslint:disable-next-line: no-inferrable-types
  ImageHeight: number = 40;
  // tslint:disable-next-line: no-inferrable-types
  ImageWidth: number = 40;

  information: ProductInfo[] = [];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private Exercise4ProductService: Exercise4ProductServiceService) { }
  ngOnInit(): void {
    this.information = this.Exercise4ProductService.productDetails;
  }

  // tslint:disable-next-line: typedef
  viewData(element: ProductInfo){
    this.message = 'Product Name: ' + element.ProductName +
                    '\nProduct Code: ' + element.ProductCode +
                    '\nBranch Name: ' + element.BranchName +
                    '\nBranch Code: ' + element.BranchCode +
                    '\nShipping Address: ' + element.ShippingAddress;
    alert(this.message);
  }
}
