var Cat = function(){
  //model goes in here
  this.name = ko.observable('Bob');
  this.clickCount = ko.observable(0);
  this.imgSrc = ko.observable('img/cat1.jpg');
  this.imgAttribution = ko.observable('https://flickr.com/photos');
  this.level = ko.computed(function(){
    if (this.clickCount()< 10) return "Newborn";
    if (this.clickCount()>= 10 && this.clickCount() < 50) return "Infant";
    if (this.clickCount()>= 50 && this.clickCount() < 100) return "Child";
    if (this.clickCount()>= 100) return "Teen";
  }, this);
  this.nicknames = ko.observableArray([
    {nickname: 'bobby'},
    {nickname: 'cutie'},
    {nickname: 'bob esponja'},
    {nickname: 'bobs'}
  ]);
}

var viewModel = function() {
  this.currentCat = ko.observable(new Cat());
  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new viewModel());
