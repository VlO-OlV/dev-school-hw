class PaginationHelper {
  
	constructor(collection, itemsPerPage) {
    this.elements = collection;
    this.number = itemsPerPage;
	}
  
	itemCount() {
    return this.elements.length;
	}
  
	pageCount() {
    return Math.ceil(this.itemCount() / this.number);
	}
  
	pageItemCount(pageIndex) {
    return ((pageIndex >= this.pageCount()) || (pageIndex < 0)) ? -1 : (pageIndex < this.pageCount()-1) ? this.number : this.elements.length - (this.pageCount()-1) * this.number;
	}
  
	pageIndex(itemIndex) {
    return (itemIndex >= this.elements.length || itemIndex < 0) ? -1 : Math.floor(itemIndex / this.number);
	}
}