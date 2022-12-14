const select = {
  templateOf: {
    book: '#template-book',
    
  },
  containerOf: {
    booksList: '.books-list',
  },
  coverImage: {
    image: '.book__image',
  },
};

const classNames = {
  favorite: 'favorite',
  active: 'active',
};

const templates = {
  books: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
};

const favoriteBooks = [];


function render(){   

  for (let book of dataSource.books){

    const generatedHTML = templates.books(book);    
    const generatedDOM = utils.createDOMFromHTML(generatedHTML);
    const booksContainer = document.querySelector(select.containerOf.booksList);
    booksContainer.appendChild(generatedDOM);
  }
}
render();

function initActions(){
  const imagesList = document.querySelectorAll(select.coverImage.image);

  for (let image of imagesList){
    image.addEventListener('dblclick', function(event){
      event.preventDefault();
      const bookId = image.getAttribute('data-id');
      if (!favoriteBooks.includes(bookId)){
        image.classList.add(classNames.favorite);
        favoriteBooks.push(bookId);
      } else {
        image.classList.remove(classNames.favorite);
        favoriteBooks.pop(bookId);
      }
    });
  }   
}

initActions();