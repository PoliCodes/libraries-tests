/// <reference path="../typings/index.d.ts" />
//console.log("ok");
// // Here's my data model
// var ViewModel = function() {
//     this.description = ko.observable("");
//     this.items = ko.observableArray([]);

//     this.addItem = function(){
//         this.items.push(this.description());
//          this.description(""); // Clear the text box
//     }.bind(this);
 
//      this.removeItem = function(item){
//          console.log("ok", item);
//         //  ko.utils.arrayRemoveItem(this.items, item);
//         //  this.items.destroy(item);   
//     }.bind(this);
// }; 
 
// ko.applyBindings(new ViewModel()); // This makes Knockout get to work

var BetterListModel = function () {
    this.itemToAdd = ko.observable("");
    this.allItems = ko.observableArray([]); // Initial items
    this.selectedItems = ko.observableArray([]);// Initial selection

    this.addItem = function () {
        if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0)) // Prevent blanks and duplicates
            this.allItems.push(this.itemToAdd());
        this.itemToAdd(""); // Clear the text box
    }; 
    this.removeSelected = function () {
        this.allItems.removeAll(this.selectedItems());
        this.selectedItems([]); // Clear selection
    }; 
    this.sortItems = function() {
        this.allItems.sort();
    };
};
 
ko.applyBindings(new BetterListModel());