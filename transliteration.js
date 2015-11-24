function pageBackground( index ){
	var result = 'style="background: ';
	var i = 0;
	while( index > 0 ){
		var cur = index%10;
		if( i > 0 ) result = result + ', '		
		result = result + 'url(img/' + cur + '.png) right ' + (i*55+20) + 'px bottom 20px no-repeat';		
		i++;
		index = Math.floor(index/10);
	}
	result = result + '"';
	return result;
}
var car;
function transcrire(tb, index) {
var obj = document.getElementById('t'+index);
var pos = obj.selectionStart;
var end;
if( pos < obj.value.length )
	end = obj.value.slice(pos,obj.value.length);
else
	end = "";
car = obj.value.slice(0,pos);
//cyrillic
car = car.replace(/я/g, "йа");
car = car.replace(/ю/g, "йу");
car = car.replace(/ё/g, "йо");
car = car.replace(/ї/g, "йи");
car = car.replace(/э/g, "е");

car = car.replace(/र्ь/g, "ऋ");
car = car.replace(/ऋь/g, "ॠ");
car = car.replace(/ल्ь/g, "ऌ");
car = car.replace(/ऌь/g, "ॡ");
car = car.replace(/ॢь/g, "ॣ");
car = car.replace(/ृь/g, "ॄ");
car = car.replace(/ळ्ь/g, "ॡ");
car = car.replace(/न्ь/g, "ञ्");
car = car.replace(/न्ъ/g, "ङ्");

car = car.replace(/а/g, "अ");
car = car.replace(/А/g, "आ");
car = car.replace(/и/g, "इ");
car = car.replace(/И/g, "ई");
car = car.replace(/у/g, "उ");
car = car.replace(/У/g, "ऊ");
car = car.replace(/е/g, "ए");
car = car.replace(/о/g, "ओ");



car = car.replace(/н/g, "न्");
car = car.replace(/к/g, "क्");
car = car.replace(/г/g, "ग्"); 
car = car.replace(/ч/g, "च्"); 
car = car.replace(/ж/g, "ज्");
car = car.replace(/Т/g, "ट्");  
car = car.replace(/Д/g, "ड्");
car = car.replace(/Н/g, "ण्"); 
car = car.replace(/т/g, "त्");
car = car.replace(/д/g, "द्");   
car = car.replace(/п/g, "प्");
car = car.replace(/б/g, "ब्");  
car = car.replace(/м/g, "म्");
car = car.replace(/й/g, "य्");     
car = car.replace(/р/g, "र्");  
car = car.replace(/л/g, "ल्");
car = car.replace(/в/g, "व्");
car = car.replace(/щ/g, "श्");
car = car.replace(/ш/g, "ष्");
car = car.replace(/с/g, "स्");
car = car.replace(/х/g, "ह्");
car = car.replace(/Л/g, "ळ्");
// cas particuliers
car = car.replace(/Г/g, "ङ्");
car = car.replace(/Ж/g, "ञ्");

car = car.replace(/्ल्Р/g, "ॢ");
car = car.replace(/ल्Р/g, "ऌ");
car = car.replace(/ऌР/g, "ॡ");
car = car.replace(/ॢР/g, "ॣ");

car = car.replace(/ऋР/g, "ॠ");
car = car.replace(/ृР/g, "ॄ");
car = car.replace(/्Р/g, "ृ");
car = car.replace(/Р/g, "ऋ");

car = car.replace(/М/g, "ं");
car = car.replace(/О/g, "ॐ");
car = car.replace(/Х/g, "ः");
car = car.replace(/:/g, "ः");

// aspirées
car = car.replace(/क्ह्/g, "ख्");
car = car.replace(/ग्ह्/g, "घ्");
car = car.replace(/च्ह्/g, "छ्");
car = car.replace(/ज्ह्/g, "झ्");
car = car.replace(/ट्ह्/g, "ठ्");
car = car.replace(/ड्ह्/g, "ढ्");
car = car.replace(/त्ह्/g, "थ्");
car = car.replace(/द्ह्/g, "ध्");
car = car.replace(/प्ह्/g, "फ्");
car = car.replace(/ब्ह्/g, "भ्");
car = car.replace(/ड़्ह्/g, "ढ़्");

car = car.replace(/क्ह/g, "ख");
car = car.replace(/ग्ह/g, "घ");
car = car.replace(/च्ह/g, "छ");
car = car.replace(/ज्ह/g, "झ");
car = car.replace(/ट्ह/g, "ठ");
car = car.replace(/ड्ह/g, "ढ");
car = car.replace(/त्ह/g, "थ");
car = car.replace(/द्ह/g, "ध");
car = car.replace(/प्ह/g, "फ");
car = car.replace(/ब्ह/g, "भ");
car = car.replace(/ड़्ह/g, "ढ़");

//Harvard-Kyoto
car = car.replace(/a/g, "अ");
car = car.replace(/A/g, "आ");
car = car.replace(/i/g, "इ");
car = car.replace(/I/g, "ई");
car = car.replace(/u/g, "उ");
car = car.replace(/U/g, "ऊ");
car = car.replace(/अअ/g, "आ");
car = car.replace(/इइ/g, "ई");
car = car.replace(/उउ/g, "ऊ");
car = car.replace(/e/g, "ए");
car = car.replace(/o/g, "ओ");
car = car.replace(/अइ/g, "ऐ");
car = car.replace(/अउ/g, "औ");

// suppression du virama 
car = car.replace(/िइ/g, "ी");
car = car.replace(/ुउ/g, "ू");
//car = car.replace(/्अ/g, "\u200b");
car = car.replace(/्आ/g, "ा");
car = car.replace(/्इ/g, "ि");
car = car.replace(/्ई/g, "ी");
car = car.replace(/्उ/g, "ु");
car = car.replace(/्ऊ/g, "ू");
car = car.replace(/्ऋ/g, "ृ");
car = car.replace(/्ॠ/g, "ॄ");
car = car.replace(/्ऌ/g, "ॢ");
car = car.replace(/्ॡ/g, "ॣ");
car = car.replace(/्ए/g, "े");
car = car.replace(/्ओ/g, "ो");
car = car.replace(/्ऐ/g, "ै");
car = car.replace(/्औ/g, "ौ");
// retrait ligne hindi  car = car.replace(/् /g, " ");

//cons
car = car.replace(/n/g, "न्");
car = car.replace(/k/g, "क्");
car = car.replace(/g/g, "ग्"); 
car = car.replace(/c/g, "च्"); 
car = car.replace(/j/g, "ज्");
car = car.replace(/T/g, "ट्");  
car = car.replace(/D/g, "ड्");
car = car.replace(/N/g, "ण्"); 
car = car.replace(/t/g, "त्");
car = car.replace(/d/g, "द्");   
car = car.replace(/p/g, "प्");
car = car.replace(/b/g, "ब्");  
car = car.replace(/m/g, "म्"); 
// car = car.replace(/q/g, "क़्");
// car = car.replace(/x/g, "ख़्");
// car = car.replace(/Y/g, "ग़्");
// car = car.replace(/z/g, "ज़्");
// car = car.replace(/f/g, "फ़्");
// car = car.replace(/R/g, "ड़्");
// car = car.replace(/f/g, "फ़्");
car = car.replace(/y/g, "य्");     
car = car.replace(/r/g, "र्");  
car = car.replace(/l/g, "ल्");
car = car.replace(/v/g, "व्");
car = car.replace(/w/g, "व्");
car = car.replace(/h/g, "ह्");
car = car.replace(/S/g, "ष्");
car = car.replace(/s/g, "स्");
car = car.replace(/L/g, "ळ्");
// cas particuliers
car = car.replace(/G/g, "ङ्");
car = car.replace(/J/g, "ञ्");
car = car.replace(/ñ/g, "ञ्"); 
//car = car.replace(/न्ग्/g, "ङ्");
//car = car.replace(/न्ज्/g, "ञ्");



// cas du s barre
//!car = car.replace(/स्ह्/g, "श्");
car = car.replace(/z/g, "श्");
//!car = car.replace(/ç/g, "श्");

// cas du ri li 


//car = car.replace(/ऌL/g, "ॡ");
//car = car.replace(/ॢL/g, "ॣ");
//car = car.replace(/्L/g, "ॢ");
//car = car.replace(/L/g, "ऌ");
car = car.replace(/्ल्R/g, "ॢ");
car = car.replace(/ल्R/g, "ऌ");
car = car.replace(/ऌR/g, "ॡ");
car = car.replace(/ॢR/g, "ॣ");

car = car.replace(/ऋR/g, "ॠ");
car = car.replace(/ृR/g, "ॄ");
car = car.replace(/्R/g, "ृ");
car = car.replace(/R/g, "ऋ");
//!car = car.replace(/्-र्/g, "ृ");
//!car = car.replace(/-र्/g, "ऋ");
//!car = car.replace(/ऋइ/g, "ॠ");
//!car = car.replace(/ृइ/g, "ॄ");

//dot change dental sounds to retroflex, also consonants R,L to vowels
car = car.replace(/र्\./g, "ऋ");
car = car.replace(/ऋ\./g, "ॠ");
car = car.replace(/ल्\./g, "ळ्");
car = car.replace(/ल्ऋ/g, "ऌ");
car = car.replace(/ऌ\./g, "ॡ");
car = car.replace(/ॢ\./g, "ॣ");
car = car.replace(/ृ\./g, "ॄ");
car = car.replace(/त्\./g, "ट्");  
car = car.replace(/थ्\./g, "ठ्");
car = car.replace(/द्\./g, "ड्");
car = car.replace(/ध्\./g, "ढ्");
car = car.replace(/न्\./g, "ण्");

// anusvara
car = car.replace(/म्\./g, "ं");
car = car.replace(/M/g, "ं");
car = car.replace(/्ं/g, "ं");
// candrabindu 
car = car.replace(/ंं/g, "ँ");
car = car.replace(/№/g, "ँ");
car = car.replace(/#/g, "ँ");
//OM
car = car.replace(/%/g, "ॐ");
car = car.replace(/O/g, "ॐ");
car = car.replace(/ॐं/g, "ॐ");
// visarga				
car = car.replace(/ह्\./g, "ः");
car = car.replace(/H/g, "ः");
car = car.replace(/्ः/g, "ः");

// alternative : car = car.replace(/:/g, "ः");
// avagraha
car = car.replace(/\'/g, "ऽ");
car = car.replace(/’/g, "ऽ");
car = car.replace(/\"/g, "ऽ");

// punctuation
car = car.replace(/\\/g, "।");
car = car.replace(/\|/g, "।");
car = car.replace(/\//g, "।");
car = car.replace(/।।/g, "॥");

car = car.replace(/0/g, "०");
car = car.replace(/1/g, "१");
car = car.replace(/2/g, "२");
car = car.replace(/3/g, "३");
car = car.replace(/4/g, "४");
car = car.replace(/5/g, "५");
car = car.replace(/6/g, "६");
car = car.replace(/7/g, "७");
car = car.replace(/8/g, "८");
car = car.replace(/9/g, "९");

//conjunct engine
car = car.replace(/\u200b\./g, "");
car = car.replace(/\u200bअ/g, "ा");
car = car.replace(/\u200bइ/g, "ै");
car = car.replace(/\u200bउ/g, "ौ");
car = car.replace(/\u200b([\s\S])/g, "$1");
car = car.replace(/्अ/g, "\u200b");

if( obj.value.slice(0,pos) != car ) {
	obj.value=car+end;
	pos = car.length;
	obj.setSelectionRange(pos,pos);
	//alert(end);
}
var lines =  obj.value.split(/\r|\r\n|\n/);
var count = lines.length;
if (count > Math.floor(obj.clientHeight/30)) {
	index++;
	newobj = document.getElementById('t'+index);
	if(newobj == null) {
		var prev = tb.rows[0].cells[tb.rows[0].cells.length-1];
		tb.style.width = (520+index*420)+'px';
		var cell = tb.rows[0].insertCell(-1);
		cell.style.width = prev.style.width;
		cell.style.verticalAlign = "top";
		cell.style.paddingLeft = "20px";
		cell.innerHTML = prev.innerHTML;
		prev.style.width = "420px";
		prev.style.paddingLeft = "15px";
		prev.innerHTML = '<textarea id="t'+index+'" name="t'+index+
			'" class="cadr" onKeyUp="transcrire(tb, '+index+');" '+
			pageBackground(index)+'></textarea>';
		newobj = document.getElementById('t'+index);

	}
	obj.value = car.slice(0, -1);
	newobj.focus();
	document.body.scrollLeft = document.body.scrollWidth;
}
}