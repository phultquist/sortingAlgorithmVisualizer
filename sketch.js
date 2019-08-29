
let topValue = 100
var iterations = 0;
var h = window.innerHeight - 50,
		w = window.innerWidth - 50;
var list;
function setup() {
  createCanvas(w, h);
	background(51);
	list = createList(500);
	drawBars(list);
	//sortList(list);
}

function draw() {
	iterations+=1

	for (ind in list){
		if (ind == list.length - 1) break;
		n1 = list[ind];
		n2 = list[parseInt(ind) + 1];
		console.log(n1,n2)
		if (n2<n1){
			console.log('N2 is less than n1')
			list[ind] = n2;
			list[parseInt(ind) + 1] = n1;
			break;
		}
		if (is_sorted(list)){ finish()};
	}
	clearCanvas();
	drawBars(list);
}

function clearCanvas(){
	clear();
	background(51);
}

function finish(){
	noLoop();
}

function pause(){
	noLoop();
}

function resume(){
	loop();
}

function createList(n){
	var arr = []
	for (i = 0; i < n; i++){
		arr.push(random(topValue));
	}

	console.log(arr)
	return arr
}

function drawBars(bars){
	let barWidth = w/bars.length;
	let scaleFactor = (h-10)/topValue;
	var x,
			y,
			bh;
	for (i in bars){
		x = barWidth*i;
		bh = bars[i]*scaleFactor;
		y = h - (bh);
		rect(x, y, barWidth, bh);
	}
}

function sortList(list){
	iterations += 1;
	var n1,
			n2;
	for (ind in list){
		if (ind == list.length - 1) sortList(list);
		n1 = list[ind];
		n2 = list[ind + 1];
		if (n2<n1){
			list[ind] = n2;
			list[ind + 1] = n1;
			sortList(list);
		}
		console.log(list)
	}

}

function compare(n1,n2){
	if (n2<n1){
		return true;
	}
	return false;
}

function is_sorted(arr) {
    var len = arr.length - 1;
    for(var i = 0; i < len; ++i) {
        if(arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
		 console.log('not done')
   }
}
