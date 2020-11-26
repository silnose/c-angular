import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { CustomValidators } from '../../../../utils/custom.validators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  public image$: Observable<any> | undefined;
  productForm = this.fb.group({
    id: [null, Validators.required],
    title: [
      null,
      Validators.compose([Validators.required, Validators.maxLength(20)]),
    ],
    description: [null, Validators.required],
    price: [
      null,
      Validators.compose([Validators.required, CustomValidators.isPriceValid]),
    ],
    image: [null],
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.productForm.valid) {
      const product = this.productForm.value;
      this.productService.addProduct(product).subscribe((result) => {
        console.log(result);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const name = 'image.png';
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe((url) => {
            console.log(url);
            this.productForm.value['image'] = url;
          });
        })
      )
      .subscribe();
  }
  get priceField() {
    return this.productForm.controls['price'];
  }
}
