class PaginationHelper {
    constructor(collection, itemsPerPage) {
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page

        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
        let pages = [];
        let onePage = [];
        for (let i = 0; i < collection.length; i++) {
            if (i % itemsPerPage === 0 && onePage.length !== 0) {
                pages.push(onePage);
                onePage = [];
            }
            onePage.push(collection[i]);
        }
        if (onePage.length) pages.push(onePage)
        this.pages = pages;
    }

    itemCount() {
        return this.collection.length;
        // returns the number of items within the entire collection
    }

    pageCount() {
        // returns the number of pages
        return this.pages.length;
    }

    pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        return this.pages[pageIndex] ? this.pages[pageIndex].length : -1
    }

    pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range


        return itemIndex > -1 && itemIndex < this.collection.length ? Math.floor(itemIndex / this.itemsPerPage) : -1;
    }
}

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log(helper.pageCount()); // should == 2
console.log(helper.itemCount()); // should == 6
console.log(helper.pageItemCount(0)); // should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); // should == 1 (zero based index)
console.log(helper.pageIndex(2)); // should == 0
console.log(helper.pageIndex(20)); // should == -1
console.log(helper.pageIndex(-10)); // should == -1