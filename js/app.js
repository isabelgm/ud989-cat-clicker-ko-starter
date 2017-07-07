var initialCats = [
  {
        name: "Kitty Eyes",
        clickCount: 0,
        imgSrc: "img/cat1.jpg",
        imgAttribution: "hhtps://flicker.com/photos",
        nicknames: [
          {nickname: 'bobby'},
          {nickname: 'cutie'},
          {nickname: 'bob esponja'},
        ]
      },
      {
        name: "Blue-Eyed Cat",
        clickCount: 0,
        imgSrc: "img/cat2.jpg",
        imgAttribution: "hhtps://flicker.com/photos",
        nicknames: [
          {nickname: 'blues'},
          {nickname: 'baby blues'}
        ]
      },
      {
        name: "Snuggle Buddies",
        clickCount: 0,
        imgSrc: "img/cat3.jpg",
        imgAttribution: "hhtps://flicker.com/photos",
        nicknames: [
          {nickname: 'snuggle bear'},
          {nickname: 'buddies'}
        ]
      },
      {
        name: "Siesta Time",
        clickCount: 0,
        imgSrc: "img/cat4.jpg",
        imgAttribution: "hhtps://flicker.com/photos",
        nicknames: [
          {nickname: 'zzzz'},
          {nickname: 'sleepy head'}
        ]
      },
      {
        name: "Park Friends",
        clickCount: 0,
        imgSrc: "img/cat5.jpg",
        imgAttribution: "hhtps://flicker.com/photos",
        nicknames: [
          {nickname: 'Saturday'},
          {nickname: 'cutie'}
        ]
      }
]

var Cat = function(data){
  //model goes in here
  this.name = ko.observable(data.name);
  this.clickCount = ko.observable(data.clickCount);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.level = ko.computed(function(){
    if (this.clickCount()< 10) return "Newborn";
    if (this.clickCount()>= 10 && this.clickCount() < 50) return "Infant";
    if (this.clickCount()>= 50 && this.clickCount() < 100) return "Child";
    if (this.clickCount()>= 100) return "Teen";
  }, this);
  this.nicknames = ko.observableArray(data.nicknames);
}

var viewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push( new Cat(catItem));
  });

  this.currentCat = ko.observable( this.catList() [0]);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.setCat = function(clickedCat){
    self.currentCat(clickedCat);
  };
}

ko.applyBindings(new viewModel());
