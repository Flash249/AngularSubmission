import { ProductInfo } from './Exercise4ProductInformation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Exercise4ProductServiceService implements ProductInfo {

  constructor(private productInfo: ProductInfo) {}
  ImageSource!: string;
  ProductName!: string;
  ProductCode!: number;
  BranchName!: string;
  BranchCode!: number;
  ShippingAddress!: string;

  productDetails: ProductInfo[] = [
    {
      ImageSource: '/assets/logos/google.png',
      ProductName: 'Google',
      ProductCode: 1001,
      BranchName: 'Technology',
      BranchCode: 501,
      ShippingAddress: 'Los Angeles',
    },
    {
      ImageSource: '/assets/logos/facebook.png',
      ProductName: 'Facebook',
      ProductCode: 1010,
      BranchName: 'Technology',
      BranchCode: 504,
      ShippingAddress: 'San Francisco',
    },
    {
      ImageSource: '/assets/logos/reuters.png',
      ProductName: 'Reuters',
      ProductCode: 1100,
      BranchName: 'News',
      BranchCode: 509,
      ShippingAddress: 'New York',
    },
    {
      ImageSource: '/assets/logos/samsung.png',
      ProductName: 'Samsung',
      ProductCode: 1011,
      BranchName: 'Electronics',
      BranchCode: 541,
      ShippingAddress: 'South Korea',
    },
    {
      ImageSource: '/assets/logos/nike.png',
      ProductName: 'Nike',
      ProductCode: 1101,
      BranchName: 'Sports',
      BranchCode: 702,
      ShippingAddress: 'Los Angeles',
    }
  ];
}
