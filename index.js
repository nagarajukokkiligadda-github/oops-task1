//question 1
class book{
title;
author;
isbn;
constructor(title,author,isbn){
this.title=title;
this.author=author;
this.isbn=isbn;
}
checkout(){
    console.log(this.title,"book is taken")
}
return(){
console.log(this.title,"return the book")
}
updatedTitle(newtitle){
this.title=newtitle;
}
}
var book1=new book("rrr","rajamouli","1080");
book1.checkout();
book1.return();
book1.updatedTitle("RRR");
console.log(book1); 


//q-2
class product{
    name;
    price;
    category;

    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    applyDiscount(amount){
          console.log(amount,this.price,"discount appiled")
    }
    getPriceAfterDiscount(){
            console.log(this.price-500,"get price")
    }

}

var shirt=new product("us polo","2000","shirts")
shirt.applyDiscount(500);
shirt.getPriceAfterDiscount(1500);
console.log(shirt)




//q-3
 class BankAccount{
    accountHolderName;
    accountNumber;
    balance;

    constructor(accountHolderName,accountNumber,balance){
        this.accountHolderName=accountHolderName;
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    deposit(amt){
     console.log(amt,this.balance,"money deposit")
     this.balance=amt;
    }
    withdraw(amt){
       console.log(amt,this.balance,"money withdraw")
    }
    getBalance(){
        console.log(this.balance,"get balance 10000")
    }
 }
 var sbi=new BankAccount("raj","223344","20000");
 sbi.deposit(10000);
 sbi.withdraw(20000);
 sbi.getBalance(10000);
 console.log(sbi);


 //q-4
 class vehicle{
    model;
    licensePlate;
    mileage;

    constructor(model,licensePlate,mileage){
             this.model=model;
             this.licensePlate=licensePlate;
             this.mileage=mileage;
    }
    drive(miles){
        console.log("increases the mileage",this.mileage,miles)
    }
    getMileage(){
        console.log("current mileage",this.mileage)
    }
 }
 var audi=new vehicle("model","licensePlate","mileage");
   audi.drive(500);
   audi.getMileage(1000);
   console.log(audi);



   //q-5

   class Student{
    name;
    grade;

    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    setGrade(newGrade){
       console.log(newGrade,this.grade,"update grade for students")
    }
    getGrade(){
      console.log(this.grade,"the students current grade")
    }
   }
   var s2=new Student("raj","30");
   s2.setGrade(20);
   s2.getGrade();
   console.log(s2);

 