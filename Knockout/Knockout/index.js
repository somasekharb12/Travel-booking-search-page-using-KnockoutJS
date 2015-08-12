/// <reference path="D:\POC\Knockout\Knockout\Knockout\Knockout\Scripts/knockout.validation.min.js" />
/// <reference path="D:\POC\Knockout\Knockout\Knockout\Knockout\Scripts/knockout.validation.js" />
/// <reference path="D:\POC\Knockout\Knockout\Knockout\Knockout\Scripts/knockout-2.3.0.js" />

ko.validation.rules.pattern.message = "Invalid.";

ko.validation.init({
    registerExtenders: true,
    messagesOnModified: true,
    insertMessages: true,
    parseInputAttributes: true,
    messageTemplate: null,
}, true);

var AppViewModel = function AppViewModel() {
    this.availableCountries = ko.observableArray(["France", "Germany", "Spain"]);
    //this.fromSelectedCountry = ko.observable();
    this.fromSelectedCountry = ko.observable().extend({ required: true });
    this.toSelectedCountry = ko.observable().extend({ required: true });
    this.travelDate = ko.observable().extend({ required: true });
    this.returnDate = ko.observable();
    this.Number = ko.observableArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    this.NoSelectedAdult = ko.observable();
    this.NoSelectedchildren = ko.observable();
    this.NoSelectedinfant = ko.observable();
    this.timelst = ko.observable();
    tm = new Date();
    var hh = tm.getHours();
    var mm = tm.getMinutes();
    var ss = tm.getSeconds();
    this.timelst = ko.observableArray([
        { from: this.fromSelectedCountry, to: this.toSelectedCountry, date: this.travelDate, time: (hh + 1) + ":" + mm },
        { from: this.fromSelectedCountry, to: this.toSelectedCountry, date: this.travelDate, time: (hh + 3) + ":" + mm },
        { from: this.fromSelectedCountry, to: this.toSelectedCountry, date: this.travelDate, time: (hh + 5) + ":" + mm }]);
    this.btn = ko.observable(false);
    this.finalbooking = ko.observable(false);
    this.find = ko.observable(false);
    this.onConform = ko.observable(false);
    this.OneWay = ko.observable(false);
    this.RoundTrip = ko.computed(function () {
        if (this.OneWay()) {
            return false;
        }
        return true;
    }, this);

}


function ViewModel2() {
    this.color = ko.observable("azure")
    this.changeColor = function () {
        this.color("#" + (Math.random() * 0xFFFFFF << 0).toString(16));
        toastr.info(this.color());
    }
}

//AppViewModel.find = ko.observable(false);
//AppViewModel.find = ko.computed(function () {
//    if (AppViewModel.Errors().length == 0)
//        return true;
//    else {
//        return false;
//        alert("Please check your submission.");
//    }
//});

AppViewModel.Errors = ko.validation.group(AppViewModel);

$(document).ready(function () {
    // Activates knockout.js
    ko.applyBindings(new ViewModel2(), document.getElementById("formId"));
    ko.applyBindings(new AppViewModel(), document.getElementById("divId"));
});


