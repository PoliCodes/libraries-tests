/// <reference path="../typings/index.d.ts" />

 namespace app {
     // Model
    function AppViewModel() {
        this.firstName = "Bert";
        this.lastName = "Bertington2"; 
    }
    // Activates knockout.js
    ko.applyBindings(new AppViewModel());
}