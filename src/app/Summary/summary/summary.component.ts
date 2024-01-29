import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceBooksService } from 'src/app/Services/books.service';
import { ShoppingComponent } from 'src/app/shopping/shopping/shopping.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {


  summaryForm: FormGroup;
  @Input() subtotal: number = 0;
  @Input() shipping: number = 0;
  @Input() discount: number = 5.54;

  constructor(private fb: FormBuilder, private shoppingComponent: ShoppingComponent, private bookService: ServiceBooksService) {
    this.summaryForm = this.fb.group({
      promoCodes: this.fb.array([])
    });
  }

  ngOnInit(): void {

    this.bookService.subtotal$.subscribe(subtotal => {
      this.calculateShipping(subtotal);
    });
  }

  calculateShipping(subtotal: number): void {
    if (subtotal > 100) {
      this.shipping = 0;
    } else {
      this.shipping = 5;
    }
  }
  onSubmit() {

  }

  get getPromo() {
    return this.summaryForm.get('promoCodes') as FormArray;
  }


  addCode() {
    const control = this.summaryForm.get('promoCodes') as FormArray;
    control.push(this.fb.group({ promoCode: [''] }));
  }

  removeCode(index: number) {
    const control = this.summaryForm.get('promoCodes') as FormArray;
    control.removeAt(index);
  }
}
