class Book
{
	constructor(title, author, numberOfPages, currentPage)
	{
		this.title = title;
		this.author = author;
		this.numberOfPages = numberOfPages;
		this.currentPage = currentPage || 0;
		this.read = false;
	}
	
	readABook(status)
	{
		this.read = status;
	}
	//let book = new Book()
	//.. book.readABook(); book.setReadABook = true;
	set setReadAbook(status)
	{
		this.read = status;
	}
	
	readAPage(pageNumber)
	{
		this.currentPage = pageNumber;
	}
	
	get getCurrentPage()
	{
		return this.currentPage;
	}
}

class eBook extends Book
{
  constructor(title, author, numberOfPages, currentPage)
  {
		super(title, author, numberOfPages, currentPage);
		
		this.burn = false;
		this.download = true;
		this.downloads = 0;
	}
	
	get canBurn()
	{
		return this.burn;
	}
	
	get canDownload()
	{
		return this.download;
	}
	
	get getDownloads()
	{
		return this.downloads;
	}
	
	setDownloadStatus(status)
	{
		this.download = status;
	}
	
	setDownloads(amount)
	{
		this.downloads = amount;
	}
}

class PaperBook extends Book
{
	constructor(title, author, numberOfPages, currentPage){
		super(title, author, numberOfPages, currentPage);
		
		this.burn = true;
		this.download = false;
		this.booked = false;
	}
	
	get canBurn()
	{
		return this.burn;
	}
	
	get canDownload()
	{
		return this.download;
	}
	
	get isBooked()
	{
		return this.booked;
	}
	
	setBook(status)
	{
		this.booked = status;
	}
}

/*
	3 Put all books in a library array and display them in a list on a screen.
		- On screen each book should be possible to:
			- be booked if paper
			- be downloaded in ebook
		- After booking is made, the status of the book should be changed on screen and list needs to be refreshed with latest status
*/
/*
let users = [
  {
    "username": "tomas",
    "password": "tomas" 
  },
  {
    "username": "stef",
    "password": "stef"
  },
  {
    "username": "dare",
    "password": "dare"
  }];
  */

let books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "images/fairy-tales.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "images/the-divine-comedy.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "images/the-epic-of-gilgamesh.jpg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
    "year": -1700
  }];
  
let library = [];
//https://github.com/benoitvallon/100-best-books/blob/master/books.json
function makeBooks()
{
	books.map((book, i) => {
		library.push(
			(i  % 2 == 0) ?
			new eBook(book.title, book.author, book.pages, 0) :
			new PaperBook(book.title, book.author, book.pages, 0))
	})
}

makeBooks();

function getDownloadableContent(book, i)
{
	let html = `
		<div>
			<div>Downloaded: ${book.downloads}</div>
			<div><button onclick="downloadBook(${i})">Download</button></div>
		</div>
	`;
	return html;
}

function getNonDownloadableContent(book, i)
{
	let html = `
		<div>
			${book.booked ?
			`<button onclick="returnBook(${i})">Revert</button>`:
			`<button onclick="bookTheBook(${i})">Book</button>`
			}
		</div>
	`;
	return html;
}

function makeBookCard(book, i)
{
	let html = `<div>
				<div>Title: ${book.title}</div>
				<div>Author: ${book.author}</div>
				<div># pages: ${book.numberOfPages}</div>
				<div>
					${book.download ?
						getDownloadableContent(book, i) :
						getNonDownloadableContent(book, i)
					}
				</div>
			</div>`;
			
	return html;
}

function bookTheBook(i)
{
	library[i].setBook(true);
	printOnScreen();
}

function returnBook(i)
{
	library[i].setBook(false);
	printOnScreen();
}

function downloadBook(i)
{
	library[i].setDownloads(library[i].downloads + 1);
	printOnScreen();
}

function printOnScreen(){
	document.querySelector('body').innerHTML = '';
	
	let ul = document.createElement('ul');
	
	library.map((book, i) => {
		let li = document.createElement('li');
		
		li.innerHTML = makeBookCard(book, i);
		ul.appendChild(li);
	});
	
	document.querySelector('body').appendChild(ul);
}

printOnScreen();