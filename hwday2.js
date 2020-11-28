//Bai 2

class Book {
  id;
  name;
  price;
  publishedDate;

  constructor(id, name, price, publishedDate) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.publishedDate = publishedDate;
  }
}

class comicBook extends Book {
  funny;
  pageNumber;
  constructor(id, name, price, publishedDate, funny, pageNumber) {
    super(id, name, price, publishedDate);
    this.id = id;
    this.name = name;
    this.price = price;
    this.publishedDate = publishedDate;
    this.funny = funny;
    this.pageNumber = pageNumber;
  }
}
class textBook extends Book {
  subject;
  grade;
  constructor(id, name, price, publishedDate, subject, grade) {
    super(id, name, price, publishedDate);
    this.id = id;
    this.name = name;
    this.price = price;
    this.publishedDate = publishedDate;
    this.subject = subject;
    this.grade = grade;
  }
}

class scienceBook extends Book {
  major;
  constructor(id, name, price, publishedDate, major) {
    super(id, name, price, publishedDate);
    this.id = id;
    this.name = name;
    this.price = price;
    this.publishedDate = publishedDate;
    this.major = major;
  }
}

// let id = Number(prompt("get the id"))
// let name = prompt("Get the name")
// let price = Number(prompt("Get the new Price"))
// let publishedDate = prompt("Get the published date")

// book1.update(name,id,price,publishedDate)
// console.log(book1);
class BookShelf {
  name;
  owner;
  dateModified;

  constructor(name, owner, dateModified) {
    this.name = name;
    this.owner = owner;
    this.dateModified = dateModified;
    this.book = [];
  }

  addBook(book) {
    this.book.push(book);
    console.log(this.book);
  }

  updateBook(id, value, Data) {
    for (let i = 0; i < this.book.length; i++)
      if (this.book[i].id === id) {
        this.book[i][value] = Data;
      }
    console.log(this.book);
  }

  deleteBook(id) {
    for (let i = 0; i < this.book.length; i++) {
      if (this.book[i].id === id) {
        this.book.splice(i, 1);
      }
    }
  }

  showBooks() {
    for (let i = 0; i < this.book.length; i++) {
      console.log(this.book[i]);
    }
  }

  findBooks(name) {
    for (let i = 0; i < this.book.length; i++) {
      if (this.book[i].name == name) {
        console.log(this.book[i]);
      }
    }
  }

  // for (let i =0 ; )
  //     this.book.splice(id-1,1)
  // console.log(this.book);
}

let myBook = new BookShelf();
let book1 = new scienceBook(1, "Science", 10e5, "8/7/2014", "Astrology");
let book2 = new textBook(2, "Tech", 10e6, "9/11/2018", "Data Analysis", 11);
let book3 = new comicBook(3, "Comic", 10e7, "10/9/2019", 9, 50);

myBook.addBook(book1);
myBook.addBook(book2);
myBook.addBook(book3);

myBook.updateBook(1, "id", 4);
myBook.updateBook(3, "price", 20000);
myBook.updateBook(2, "name", "troll");

myBook.deleteBook(4);

myBook.findBooks("Comic");

//Bai 1
//Module là tập hợp các dòng code có liên quan hoặc cùng chức năng.
//import là nhận vào file export
//Ví Dụ
//Export sang file testModule.js
export const house = [
  {
    id: 1,
    address: "Hanoi",
    price: 100000,
  },
];
