App.controller('nCtrl',function($scope,FlightsSrv,$location) {


$scope.travellers = [];
	var adults=FlightsSrv.getAdults();
	var child =FlightsSrv.getChild();
	var baby =FlightsSrv.getBaby();
	var i =1;
	while(i<=adults){
		var entry={};
		entry.type='Adult';
		entry.counter=i;
		entry.firstName='';
		entry.middleName='';
		entry.lastName='';
		entry.passport='';
		i++;
		$scope.travellers.push(entry);

	}
	var i =1;
	while(i<=child){
		var entry={};
		entry.type='Child';
		entry.counter=i;
		entry.firstName='';
		entry.middleName='';
		entry.lastName='';
		entry.passport='';
		i++;
		$scope.travellers.push(entry);

	}	var i =1;
	while(i<=baby){
		var entry={};
		entry.type='Baby';
		entry.counter=i;
		entry.firstName='';
		entry.middleName='';
		entry.lastName='';
		entry.passport='';
		i++;
		$scope.travellers.push(entry);

	}
$scope.user =
  {name: '',
  email: ''};
  $scope.goToPrev=function(){
   
    $location.url('/confirmation');
  
  };
  $scope.goNext=function(){
    $location.url('/ref');
  };


});