import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServiceBooksService } from './books.service';
import { Book } from '../Interfaces/interface-book';

describe('ServiceBooksService', () => {
  let service: ServiceBooksService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceBooksService],
    });

    service = TestBed.inject(ServiceBooksService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all books', () => {
    const dummyBooks: Book[] = [
      {
        id: 1,
        title: 'Book 1',
        description: 'Description 1',
        category: 'Category 1',
        thumbnail: 'url1.jpg',
        author: 'Author 1',
        price: 19.99,
        quantity: 10,
        createdAt: '2024-01-30T12:00:00Z',
        updatedAt: '2024-01-30T12:00:00Z',
        cartId: 'cart123',
        promoCode: ['PROMO1', 'PROMO2']
      },
      // Add more books as needed...
    ];

    service.getAll().subscribe(books => {
      expect(books).toEqual(dummyBooks);
    });

    const req = httpTestingController.expectOne('api/books');
    expect(req.request.method).toBe('GET');
    req.flush(dummyBooks);
  });

  it('should get items in the cart', () => {
    const dummyCartItems: Book[] = [
      {
        id: 1,
        title: 'Book in Cart',
        description: 'Description in Cart',
        category: 'Category in Cart',
        thumbnail: 'url-cart.jpg',
        author: 'Author in Cart',
        price: 29.99,
        quantity: 5,
        createdAt: '2024-01-31T12:00:00Z',
        updatedAt: '2024-01-31T12:00:00Z',
        promoCode: ['PROMO3']
      },
      // Add more cart items as needed...
    ];

    service.getCarrito().subscribe(cartItems => {
      expect(cartItems).toEqual(dummyCartItems);
    });

    const req = httpTestingController.expectOne('api/cart');
    expect(req.request.method).toBe('GET');
    req.flush(dummyCartItems);
  });

  it('should get the number of items in the cart', () => {
    const dummyCount = 5;

    service.getnumero().subscribe(count => {
      expect(count).toEqual(dummyCount);
    });

    const req = httpTestingController.expectOne('api/cart/count');
    expect(req.request.method).toBe('GET');
    req.flush(dummyCount);
  });

  it('should add an item to the cart', () => {
    const dummyBook: Book = {
      id: 1,
      title: 'New Book',
      description: 'New Description',
      category: 'New Category',
      thumbnail: 'new-url.jpg',
      author: 'New Author',
      price: 24.99,
      quantity: 1,
      createdAt: '2024-02-01T12:00:00Z',
      updatedAt: '2024-02-01T12:00:00Z',
      promoCode: ['PROMO4']
    };

    service.addItem(dummyBook).subscribe(book => {
      expect(book).toEqual(dummyBook);
    });

    const req = httpTestingController.expectOne('api/cart');
    expect(req.request.method).toBe('POST');
    req.flush(dummyBook);
  });

  it('should update an item in the cart', () => {
    const dummyBook: Book = {
      id: 1,
      title: 'Updated Book',
      description: 'Updated Description',
      category: 'Updated Category',
      thumbnail: 'updated-url.jpg',
      author: 'Updated Author',
      price: 34.99,
      quantity: 2,
      createdAt: '2024-02-02T12:00:00Z',
      updatedAt: '2024-02-02T12:00:00Z',
      promoCode: ['PROMO5']
    };

    service.updateItem(dummyBook).subscribe(book => {
      expect(book).toEqual(dummyBook);
    });

    const req = httpTestingController.expectOne(`api/cart/${dummyBook.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(dummyBook);
  });

  it('should remove an item from the cart', () => {
    const dummyBookId = 1;

    service.remove(dummyBookId).subscribe(book => {
      expect(book).toBeTruthy(); // Assuming the API returns a book object upon deletion
    });

    const req = httpTestingController.expectOne(`api/cart/${dummyBookId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  it('should check if a book exists in the cart', () => {
    const dummyBook: Book = {
      id: 1,
      title: 'Existing Book',
      description: 'Existing Description',
      category: 'Existing Category',
      thumbnail: 'existing-url.jpg',
      author: 'Existing Author',
      price: 44.99,
      quantity: 3,
      createdAt: '2024-02-03T12:00:00Z',
      updatedAt: '2024-02-03T12:00:00Z',
      promoCode: ['PROMO6']
    };
    const dummyCartItems: Book[] = [dummyBook];

    service.getCarrito().subscribe(cartItems => {
      expect(cartItems).toEqual(dummyCartItems);
    });

    const req = httpTestingController.expectOne('api/cart');
    expect(req.request.method).toBe('GET');
    req.flush(dummyCartItems);

    service.bookExistsInCart(dummyBook).subscribe(exists => {
      expect(exists).toBe(true);
    });
  });
});
