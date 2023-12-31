## library-management-system

### description
creates a basic backend for a library management system

### Routes
## member CRUD routes
-POST /members 
Description : Creates a new member
Headers : Content-Type : "application/json"
Request Body : {"name" : "Member name here",
                "contact" : "Member contact",
                "membershipDetails" : "membership details"}
Response : {
    "name": "Member name here",
    "contact": "Member contact",
    "membershipDetails": "membership details",
    "outstandingDebt": 0,
    "_id": "member id",
    "__v": 0
}

-GET /members
Description : Reads all members
Response : [{
    "name": "Member name here",
    "contact": "Member contact",
    "membershipDetails": "membership details",
    "outstandingDebt": 0,
    "_id": "member id",
    "__v": 0
},
{
    "name": "Member name here",
    "contact": "Member contact",
    "membershipDetails": "membership details",
    "outstandingDebt": 0,
    "_id": "member id",
    "__v": 0
}]

-GET /members/:id
Description : Reads a specific member by ID
Response : {
    "name": "Member name here",
    "contact": "Member contact",
    "membershipDetails": "membership details",
    "outstandingDebt": 0,
    "_id": "member id",
    "__v": 0
}

-PUT /members/:id
Description : Updates a member's details
Input : {Headers : {Content-Type : "application/json"}},{Request Body :{
    "name": "Updated Member name here",
    "contact": "Updated Member contact",
    "membershipDetails": "Updated membership details",
    "outstandingDebt": updated value,
    "_id": "member id",
    "__v": 0
}}
Response : {
    "name": "Updated Member name here",
    "contact": "Updated Member contact",
    "membershipDetails": "Updated membership details",
    "outstandingDebt": updated value,
    "_id": "member id",
    "__v": 0
}

-DELETE /members/:id
Description : Deletes a member by its Id
Response : {
    "name": "Member name here",
    "contact": "Member contact",
    "membershipDetails": "membership details",
    "outstandingDebt": 0,
    "_id": "member id",
    "__v": 0
}

## books CRUD routes

-POST /books
Description : Posts new books in the Database
Input : Headers:
                Content-Type : "application/json"
        Request body: 
                {
                    "title" : "Book Title",
                    "author" : "Author name",
                    "isbn" : "isbn" ,
                    "publisher" : "publisher name",
                    "quantity" : book quantity
                }
Output : Response :{
    "message": "Book created succefully"
}

-GET /books
Description : shows all the books
Response : {
    "message": "Showing all the books",
    "books": [
        {
            "_id": "book id",
            "title" : "Book Title",
            "author" : "Author name",
            "isbn" : "isbn" ,
            "publisher" : "publisher name",
            "quantity" : book quantity,
            "__v": 0
        }
     ]
}

-GET /books/:bookId 
Description : shows a particular book by its id
Response :  {
            "_id": "book id",
            "title" : "Book Title",
            "author" : "Author name",
            "isbn" : "isbn" ,
            "publisher" : "publisher name",
            "quantity" : book quantity,
            "__v": 0
        }

-PUT /books/:bookId
Description : Updates book details by a particular id
Input : Headers :
            Content-Type : "application/json"
        Body :  {
            "title" : "Updated Book Title",
            "author" : "Updated Author name",
            "isbn" : "Updated isbn" ,
            "publisher" : "Updated publisher name",
            "quantity" : Updated book quantity
        }
Response :  {
            "_id": "book id",
            "title" : "Updated Book Title",
            "author" : "Updated Author name",
            "isbn" : "Updated isbn" ,
            "publisher" : "Updated publisher name",
            "quantity" : Updated book quantity,
            "__v": 0
        }

-DELETE /books/:bookId
Description : Deletes a book by its id
Response : {
            "_id": "book id",
            "title" : "Book Title",
            "author" : "Author name",
            "isbn" : "isbn" ,
            "publisher" : "publisher name",
            "quantity" : book quantity,
            "__v": 0
        }

### transaction routes

-POST /transaction/issue
Description : Issues a book to a member
Input : Headers :
            Content-Type : "application/json"
        Request Body :
        {
            "bookId": "book_id",
            "memberId" : "member_id",
            "dueDate" : " Date in YYYY-MM-DD format"
        }
Response : {
    "_id": "transaction_id",
    "book": "book_id",
    "member": "member_id",
    "dueDate": "YYYY-MM-DDT00:00:00.000Z",
    "returnDate": null,
    "__v": 0
}

-POST /transaction/return
Description : for maintaining the books after it has been returned and adds the outstanding debt to the member incase of late return
Input : Headers :
            Content-Type : "application/json"
        Request Body :
        {
            "bookId": "book_id",
            "memberId" : "member_id",
            "returnDate" : " Date in YYYY-MM-DD format"
        }
Response : {
    "_id": "transaction_id",
    "book": "book_id",
    "member": "member_id",
    "dueDate": "YYYY-MM-DDT00:00:00.000Z",
    "returnDate": "YYYY-MM-DDT00:00:00.000Z" ,
    "__v": 0
}

### Search Query Route
Description : Searches for a book based on its author / book name
-GET /search?query=bookName/authorName
Response : {
            "_id": "book id",
            "title" : "Book Title",
            "author" : "Author name",
            "isbn" : "isbn" ,
            "publisher" : "publisher name",
            "quantity" : book quantity,
            "__v": 0
        }

