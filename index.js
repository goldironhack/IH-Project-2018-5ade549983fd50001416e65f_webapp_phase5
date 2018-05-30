// JavaScript Document
var map;
var t1 = [];
var t2 = [];
var t3 = [];
var t4 = [];

const url1 = "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD";
const url2 = "http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson";
const url3 = "https://data.cityofnewyork.us/api/views/bydc-d8tj/rows.json?accessType=DOWNLOAD";
const url4 = "https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD";


function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7291, lng: -73.9965},
          zoom: 12
        });
        var marker = new google.maps.Marker({
		position: {
			lat: 40.7291,
			lng: -73.9965
		},
		map: map
	});
      map.data.loadGeoJson("http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson");
      }

function getDataURL(URL,array=[]){
	var data = $.get(URL,function(){
		console.log(URL);
					 })
	.done(function(){
		console.log(data);
		for(var i = 0;i<data.responseJSON.data.length;i++){
			array.push(data.responseJSON.data[i]);
		}
    console.log(array);
	})
	.fail(function(error){
		console.error(error);
		console.log("hola");
	})
}

function getDataURL1(URL,array){
	var data = $.getJSON(URL,function(){
		console.log(URL);
					 })
	.done(function(){
		console.log(data);
    for(var i = 0;i<data.responseJSON.features.length;i++){
			array.push(data.responseJSON.features[i]);
		}
    console.log(array)
    console.log(array.length)
	})
	.fail(function(error){
		console.error(error);
		console.log("hola");
	})
}

function updateTable(){
	tableReference = $("#mainTableBody10")[0];
	var newRow, Name, Location
	for(var i = 0;i<10;i++){
		newRow = tableReference.insertRow(tableReference.rows.length);
		Name = newRow.insertCell(0);
		Location = newRow.insertCell(1);
		Name.innerHTML = t1[i][10];
		Location.innerHTML = t1[i][9];
	}

}

function rank10(){
  var opt = document.getElementById('sel1').value;
  console.log(opt);
  if (opt == 1) {
    rankd();
  }
  else if (opt == 2) {
    updateTable()
    ranks();
  }
  else if (opt == 3) {
    ranka();
  }
}

function rankd(){
  tableReference = $("#mainTableBody10")[0];
	var newRow, Name, Location
	for(var i = 0;i<10;i++){
	newRow = tableReference.insertRow(tableReference.rows.length);
	Name = newRow.insertCell(0);
	Location = newRow.insertCell(1);
	Name.innerHTML = t1[i][10];
	Location.innerHTML = t1[i][9];
}}
function ranks(){
  tableReference = $("#mainTableBody10")[0];
  var newRow, Name, Location
  for(var i = 50;i<60;i++){
  newRow = tableReference.insertRow(tableReference.rows.length);
  Name = newRow.insertCell(0);
  Location = newRow.insertCell(1);
  Name.innerHTML = t1[i][10];
  Location.innerHTML = t1[i][9];
}}
function ranka(){

  tableReference = $("#mainTableBody10")[0];
  var newRow, Name, Location
  for(var i = 30;i<40;i++){
  newRow = tableReference.insertRow(tableReference.rows.length);
  Name = newRow.insertCell(0);
  Location = newRow.insertCell(1);
  Name.innerHTML = t1[i][10];
  Location.innerHTML = t1[i][9];
}}
$(document).ready(function(){
  $("#act").on("click",getDataURL(url1,t1));
  $("#act").on("click",getDataURL1(url2,t2));
  $("#act").on("click",getDataURL(url3,t3));
  $("#act").on("click",getDataURL(url4,t4));
	$("#table").on("click",updateTable);
  $("#top10").on("click",rank10);
});