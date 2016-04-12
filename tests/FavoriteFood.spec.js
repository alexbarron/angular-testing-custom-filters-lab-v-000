describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  beforeEach(inject(function ($filter){
    favoriteFood = $filter('favoriteFood');
  }));

  it('should filter people with the requested favorite food', function(){
    var people = [
      {name: "Joe", favoriteFood: "tacos"},
      {name: "Jane", favoriteFood: "curry"},
      {name: "Anna", favoriteFood: "pizza"},
      {name: "Alex", favoriteFood: "curry"}
    ];
    var curry_lovers = [
      {name: "Jane", favoriteFood: "curry"},
      {name: "Alex", favoriteFood: "curry"}
    ];
    expect(favoriteFood(people, "curry")).toEqual(curry_lovers);
  });

	
});
