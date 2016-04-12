describe('removeAllVowels Filter', function () {
	var $controller, removeVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  beforeEach(inject(function ($filter){
    removeVowels = $filter('removeAllVowels');
  }));

  it('should remove all vowels', function(){
    expect(removeVowels('lalelilolul')).toEqual('llllll');
  });

});
