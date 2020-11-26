import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { CustomValidators } from 'src/app/utils/custom.validators';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss'],
})
export class ProductsEditComponent implements OnInit {
  id: string = '';
  productForm = this.fb.group({
    title: [
      null,
      Validators.compose([Validators.required, Validators.maxLength(20)]),
    ],
    description: [null, Validators.required],
    price: [
      null,
      Validators.compose([Validators.required, CustomValidators.isPriceValid]),
    ],
    image: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe((product) => {
        this.productForm.patchValue(product);
      });
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.productForm.valid) {
      const productFormValue = this.productForm.value;
      const id = this.productService
        .updateProduct(this.id, productFormValue)
        .subscribe((result) => {
          console.log(result);
          this.router.navigate(['./admin/products']);
        });
    }
  }

  get priceField() {
    return this.productForm.controls['price'];
  }
}
