
const RENDER_EVENT = 'render-book';

function generateId() {
    return +new Date();
  }
  
  function generateBookObject(id, inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete) {
    return {
      id,
      inputBookTitle,
      inputBookAuthor,
      inputBookYear,
      inputBookIsComplete
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('inputBook');
    submitForm.addEventListener('submit', function (event) {
      event.preventDefault();
      addNewBook();
    });

    if (isStorageExist()) {
      loadDataFromStorage();
    }
  });

  function addNewBook() {
    const textTitle = document.getElementById('inputBookTitle').value;
    const textAuthor = document.getElementById('inputBookAuthor').value;
    const numberYear = document.getElementById('inputBookYear').value;
    const finishedOrUnfinished = document.getElementById('inputBookIsComplete');
   
    let bookFinished;

    if(finishedOrUnfinished.checked){
        bookFinished = true;
    }else{
        bookFinished = false;
    }

    const generatedID = generateId();
    const bookObject = generateBookObject(generatedID, textTitle, textAuthor, numberYear, finishedOrUnfinished.checked );
 
    books.push(bookObject);
    document.dispatchEvent(new Event(RENDER_EVENT));
    
    saveData();
  }

  
// Storage

