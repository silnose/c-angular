import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from './products.service';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/interfaces/product.model';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  // Antes de cada prueba. Modulo para preparar todo antes de ejecutar las pruebas
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('tests for getAllProducts', () => {
    it('sholud return products', () => {
      // arrange - preparar
      const expectData = [
        {
          id: '1234',
          title: 'test',
          price: 125,
          description: 'text',
          image: 'img/img.jpg',
        },
        {
          id: '1236',
          title: 'test',
          price: 125,
          description: 'text',
          image: 'img/img.jpg',
        },
      ];

      let dataError;
      let dataResponse: Product[] = [];

      // act - actuacion
      service.getAllProducts().subscribe(
        (response) => {
          dataResponse = response;
        },
        (err) => {
          dataError = err;
        }
      );

      const req = httpTestingController.expectOne(
        `${environment.url_api}/products`
      );
      req.flush(expectData);

      // assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
