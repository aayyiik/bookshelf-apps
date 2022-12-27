document.addEventListener(RENDER_EVENT, function () {
    // //console.log(book);
    // const uncompletedBOOKList = document.getElementById('book');
    // uncompletedBOOKList.innerHTML = '';

    // for (const bookItem of book) {
    //     const bookElement = makeBook(bookItem);
    //     uncompletedBOOKList.append(bookElement);
    //   }

    const uncompletedBOOKList = document.getElementById('incompleteBookshelfList');
    uncompletedBOOKList.innerHTML = '';

    const completedBOOKList = document.getElementById('completeBookshelfList');
  completedBOOKList.innerHTML = '';
 
  for (const bookItem of books) {
    const bookElement = makeBook(bookItem);
    if (!bookItem.inputBookIsComplete) 
      uncompletedBOOKList.append(bookElement);

      else
      completedBOOKList.append(bookElement);
    }
  
    console.log(localStorage.getItem(STORAGE_KEY));
    
  });