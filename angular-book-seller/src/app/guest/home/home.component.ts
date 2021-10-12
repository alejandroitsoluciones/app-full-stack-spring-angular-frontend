import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Purchase } from 'src/app/models/purchase.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BookService } from 'src/app/services/book.service';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookList: Array<Book> = [];
  errorMessage: string = "";
  infoMessage: string = "";

  constructor(private authenticationService: AuthenticationService, 
    private bookService: BookService, 
    private purchaseService: PurchaseService) { 

     }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(data => {
      this.bookList = data;
    });
  }

  purchase(item: Book) {
    if (!this.authenticationService.currentUserValue?.id) {
      this.errorMessage = "You Should Log In To Buy A Book";
      return;
    }

    const purchase = new Purchase(this.authenticationService.currentUserValue.id, item.id, item.price);

    this.purchaseService.savePuchase(purchase).subscribe(data =>{
      this.infoMessage = "Operation Completed";
    }, err => {
      this.errorMessage = "Unexpected Error Occurred";
      console.log(err);
    });
  }

}
