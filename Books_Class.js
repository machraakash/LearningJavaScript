class Library {
  constructor(title, author, number_of_pages, shelf) {
    this.title = title;
    this.author = author;
    this.number_of_pages = number_of_pages;
    this.shelf = shelf;
  }
  libraryShelf(newshelf) {
    this.shelf = newshelf;
    return this.shelf;
  }
}
export default Library;
