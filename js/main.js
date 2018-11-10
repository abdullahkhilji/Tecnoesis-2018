var reinventingfont = document.getElementById('reinventing_font');
var art = document.getElementById('art');
var artParts = art.children;
var heading = document.getElementById('heading');
var bar = document.getElementById('sidebar');
var baritems = document.getElementById('sidebar').children;
var sidebarmodule=document.getElementById('sidebarmodule');
var sidebarmoduleitems=document.getElementById('sidebarmodule').children;
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var img3=document.getElementById('img3');
var textpart=document.getElementById('text').children;
var particle=document.getElementById('particles');
var introtext = document.getElementById('intro-text');
var btnmodulemenu = document.getElementById('btn-module-menu');
var btnhome = document.getElementById('btn-home');
var btnexplore = document.getElementById('explore-btn');
var btnright = document.getElementById('rightarrow');
var btnleft = document.getElementById('leftarrow');
var moduleMenuOpen;

var moduleIndex = 0;

var moduleNames = ['ironman', 'showcase', 'helmet', 'conferanza', 'computer', 'gaming','sae', 'smartcity', 'brain', 'empressario', 'schoolgenius', 'asme','psychewizard'];
var moduleNamesActual = ['robotron', 'showcase', 'amazers', 'conferenza', 'cyberwarp', 'v-warz','sae', 'smart city', 'myndsnare', 'empresaario', 'school genius', 'asme','psyche wizard'];


window.onload = function(){

	document.getElementById('loadercontainer').style.top = "-100vh";

	initialize();
}

function initialize(){
	
	if(window.innerHeight>window.innerWidth){
		document.body.style.height = Math.min(window.innerHeight, document.documentElement.clientHeight) + "px";
	}

	setTimeout(function(){
		art.className = "loaded"
		for(var i=0; i<24; i++){
			artParts[i].className = "loaded";
		}
	}, 100);

	setTimeout(function(){
		art.className = "loaded";
		for(var i=24; i<34; i++){
			artParts[i].className = "loaded";
		}
	}, 1800);

	setTimeout(function(){
		art.className = "loaded";
		for(var i=40; i<50; i++){
			artParts[i].className = "loaded";
		}
	}, 1900);

	setTimeout(function(){
		art.className = "loaded";
		for(var i=56; i<66; i++){
			artParts[i].className = "loaded";
		}
	}, 1900);

	setTimeout(function(){
		art.className = "loaded";
		for(var i=34; i<40; i++){
			artParts[i].className = "loaded";
		}
	}, 2300);

	setTimeout(function(){
		art.className = "loaded";
		for(var i=50; i<56; i++){
			artParts[i].className = "loaded";
		}
	}, 2300);


	setTimeout(function(){
		reinventingfont.className="after_load";
	}, 2500);


	var inter1 = setInterval(function(){
		for(var i=0;i<8;i++){
			if(artParts[i].className== "loaded")
				artParts[i].className="changeload";
			else if (artParts[i].className=="changeload")
				artParts[i].className="loaded";
		}
	},1000);

	var inter2 = setInterval(function(){
		for(var i=16;i<24;i++){
			if(artParts[i].className== "loaded")
				artParts[i].className="changeload";
			else if (artParts[i].className=="changeload")
				artParts[i].className="loaded";
		}
	},1500);

	var inter3 = setInterval(function(){
		for(var i=8;i<16;i++){
			if(artParts[i].className== "loaded")
				artParts[i].className="changeload";
			else if (artParts[i].className=="changeload")
				artParts[i].className="loaded";
		}
	},1500);

	var inter4 = setTimeout(function(){
		for(var i=24;i<66;i++){
			artParts[i].className="india";
		}
	},3500);

	var inter5 = setInterval(function(){
		for(var i=24;i<66;i++){
			if(artParts[i].className== "india")
				artParts[i].className="changeindia";
			else if (artParts[i].className=="changeindia")
				artParts[i].className="india";
		}
	},1500);	

	btnexplore.addEventListener('click', loadHome);

	document.getElementById('btn-home').addEventListener('click', hideModulePage);

	document.getElementById('sidebar1').addEventListener('click', loadModulePage);

	setInterval(function(){
		var showcaseparts=document.getElementById('art').children;
		for(var i=25;i<27;i++){
			if (showcaseparts[i].className=="showcase") 
				showcaseparts[i].className = "changeshowcase";

			else if(showcaseparts[i].className=="changeshowcase")
				showcaseparts[i].className = "showcase";
		}
	}, 2000);

	setInterval(function(){
		var showcaseparts=document.getElementById('art').children;
		for(var i=27;i<=30;i++){
			if (showcaseparts[i].className=="showcase") 
				showcaseparts[i].className = "changeshowcase";

			else if(showcaseparts[i].className=="changeshowcase")
				showcaseparts[i].className = "showcase";
		}
	}, 2000);

	setInterval(function(){

		var helmetparts=document.getElementById('art').children;

		if (helmetparts[12].className=="helmet") 
			helmetparts[12].className = "changehelmet";
		else if(helmetparts[12].className=="changehelmet")
			helmetparts[12].className = "helmet";

		if (helmetparts[14].className=="helmet") 
			helmetparts[14].className = "changehelmet";
		else if(helmetparts[14].className=="changehelmet")
			helmetparts[14].className = "helmet";

		if (helmetparts[21].className=="helmet") 
			helmetparts[21].className = "changehelmet";
		else if(helmetparts[21].className=="changehelmet")
			helmetparts[21].className = "helmet";

		if (helmetparts[23].className=="helmet") 
			helmetparts[23].className = "changehelmet";

		else if(helmetparts[23].className=="changehelmet")
			helmetparts[23].className = "helmet";
	}, 1500);

	setInterval(function(){
		var helmetparts=document.getElementById('art').children;

		if (helmetparts[13].className=="helmet") 
			helmetparts[13].className = "changehelmet";
		else if(helmetparts[13].className=="changehelmet")
			helmetparts[13].className = "helmet";

		if (helmetparts[15].className=="helmet") 
			helmetparts[15].className = "changehelmet";
		else if(helmetparts[15].className=="changehelmet")
			helmetparts[15].className = "helmet";

		if (helmetparts[22].className=="helmet") 
			helmetparts[22].className = "changehelmet";
		else if(helmetparts[22].className=="changehelmet")
			helmetparts[22].className = "helmet";

		if (helmetparts[24].className=="helmet") 
			helmetparts[24].className = "changehelmet";

		else if(helmetparts[24].className=="changehelmet")
			helmetparts[24].className = "helmet";

		if (helmetparts[33].className=="helmet") 
			helmetparts[33].className = "changehelmet";

		else if(helmetparts[33].className=="changehelmet")
			helmetparts[33].className = "helmet";

		if (helmetparts[34].className=="helmet") 
			helmetparts[34].className = "changehelmet";

		else if(helmetparts[34].className=="changehelmet")
			helmetparts[34].className = "helmet";
	}, 1500);

	setInterval(function(){
		var computerparts=document.getElementById('art').children;
		for(var i=0;i<=2;i++){
			if(computerparts[i].className=="computer")
				computerparts[i].className="computerchange";
			else if(computerparts[i].className=="computerchange")
				computerparts[i].className="computer";
		}
	}, 1500);

	setInterval(function(){
		var computerparts=document.getElementById('art').children;
		for(var i=0;i<=2;i++){
			if(computerparts[i].className=="computer")
				computerparts[i].className="computerchange";
			else if(computerparts[i].className=="computerchange")
				computerparts[i].className="computer";
		}
	}, 2500);

	setInterval(function(){
		var computerparts=document.getElementById('art').children;
		if(computerparts[17].className=="computer")
			computerparts[17].className="computerchange";
		else if(computerparts[17].className=="computerchange")
			computerparts[17].className="computer";

		if(computerparts[26].className=="computer")
			computerparts[26].className="computerchange";
		else if(computerparts[26].className=="computerchange")
			computerparts[26].className="computer";
	}, 700);

	setInterval(function(){
		for(var i=0;i<=10;i++){
			if (artParts[i].className=="asme") 
				artParts[i].className = "changeasme";

			else if(artParts[i].className=="changeasme")
				artParts[i].className = "asme";
		}
	}, 1200);

	setInterval(function(){
		for(var i=20;i<=26;i++){
			if (artParts[i].className=="asme") 
				artParts[i].className = "changeasme";

			else if(artParts[i].className=="changeasme")
				artParts[i].className = "asme";
		}
	}, 1200);

	setInterval(function(){
		if (artParts[17].className=="asme") 
			artParts[17].className = "changeasme";

		else if(artParts[17].className=="changeasme")
			artParts[17].className = "asme";
	}, 1200);

	btnright.addEventListener("click", function(){

		moduleIndex = (moduleIndex+1)%moduleNames.length;
		openModule();
	});

	btnleft.addEventListener("click", function(){

		moduleIndex  = (moduleIndex-1+moduleNames.length)%moduleNames.length;
		openModule();
	});

	document.getElementById('sidebar1module').addEventListener("click", function(){
		openModule(0, true);
	});

	document.getElementById('sidebar2module').addEventListener("click",function(){
		openModule(1, true);
	});

	document.getElementById('sidebar3module').addEventListener("click",function(){
		openModule(2, true);
	});

	document.getElementById('sidebar4module').addEventListener("click",function(){
		openModule(3, true)
	});

	document.getElementById('sidebar5module').addEventListener("click",function(){
		openModule(4, true);
	});

	document.getElementById('sidebar6module').addEventListener("click",function(){
		openModule(5, true);
	});

	document.getElementById('sidebar7module').addEventListener("click",function(){
		openModule(7, true);
	});

	document.getElementById('sidebar8module').addEventListener("click",function(){
		openModule(8, true);
	});

	document.getElementById('sidebar9module').addEventListener("click",function(){
		openModule(9, true);
	});

	document.getElementById('sidebar10module').addEventListener("click",function(){
		openModule(10, true);
	});

	document.getElementById('sidebar11module').addEventListener("click",function(){
		openModule(11, true);
	});

	document.getElementById('sidebar12module').addEventListener("click",function(){
		openModule(12, true);
	});
	document.getElementById('sidebar13module').addEventListener("click",function(){
		openModule(6, true);
	});

	document.getElementById('info').addEventListener("click", function(){

		setTimeout(function(){
			loadModuleText();
		}, 300);
	});

	document.getElementById('closebtn').addEventListener("click", function(){

		setTimeout(function(){
			closeModuleText();
		},300);
	});

	moduleMenuOpen = false;

	document.getElementById('btn-module-menu').addEventListener('click', toggleModuleMenu);
}

function loadHome(){

	art.className="home";

	for(var i=0; i<artParts.length; i++){
		artParts[i].className = "home";
	}

	reinventingfont.className = "";

	setTimeout(function(){
		art.className="home2";
		heading.className="home";
		introtext.className="";
	}, 3000);

	document.body.className="home";

	bar.style.display='block';

	setTimeout(function(){
		bar.className="home";
	},3000);

	btnexplore.remove();

	// if(inter1) clearInterval(inter1);
	// if(inter2) clearInterval(inter2);
	// if(inter3) clearInterval(inter3);
	// if(inter4) clearInterval(inter4);
	// if(inter5) clearInterval(inter5);
}

function hideModulePage(index){

	art.className = "home";

	setTimeout(function(){
		art.className="home2";
		heading.className="home";
		introtext.className = "";
	}, 1500);

	setTimeout(function(){
		bar.className="home";
	}, 2000);

	for(var i=0;i<14;i++)
		sidebarmoduleitems[i].className = '';

	for(var i=0; i<artParts.length; i++){
		artParts[i].className = "home";
	}

	particle.style.display='block';

	if(window.innerWidth > window.innerHeight){
		setTimeout(function(){
			for(var i=0;i<6;i++)
				sidebarmoduleitems[i].style.left='-240px';
			for(var i=6;i<14;i++)
				sidebarmoduleitems[i].style.right='-240px';
				sidebarmoduleitems[12].style.left='-240px';

		},800);
	}else{
		document.getElementById('btn-module-menu').className = "close";
	}

	document.body.className="home";
	img1.style.display='block';
	img2.style.display='block';
	img3.style.display='block';

	document.getElementById('modulename').children[0].innerHTML = "";
	document.getElementById('info').style.display='none';
	document.getElementById('rightarrow').style.display='none';
	document.getElementById('leftarrow').style.display='none';

	btnhome.style.display = "none";
	btnmodulemenu.className = "";
}

function loadModulePage(index){

	art.className = "module";
	heading.className = "top";
	bar.className = "";
	btnhome.style.display = "inline-block";
	introtext.className = "hidden";

	for(var i=0;i<14;i++)
		sidebarmoduleitems[i].className=moduleNames[moduleIndex];

	for(var i=0; i<artParts.length; i++){
		artParts[i].className = moduleNames[moduleIndex];
	}

	particle.style.display='none';

	if(window.innerWidth > window.innerHeight){
		setTimeout(function(){
			for(var i=0;i<6;i++)
				sidebarmoduleitems[i].style.left='0px';

			for(var i=6;i<14;i++)
				sidebarmoduleitems[i].style.right='0px';
				sidebarmoduleitems[12].style.left='0px';

		},800);
	}else{
		setTimeout(function(){
			document.getElementById('btn-module-menu').className = "open";
		}, 2000)
	}

	document.body.className=moduleNames[moduleIndex];
	img1.style.display='none';
	img2.style.display='none';
	img3.style.display='none';

	document.getElementById('modulename').children[0].innerHTML = moduleNamesActual[moduleIndex].toUpperCase();
	document.getElementById('info').style.display='block';
	document.getElementById('rightarrow').style.display='block';
	document.getElementById('leftarrow').style.display='block';
}

document.body.addEventListener('keyup', handleKeyPress);

function handleKeyPress(e){

	var code = e.keyCode;

	if(code === 39) { // right arrow

		if(art.className!='module') return;

		moduleIndex = (moduleIndex+1)%moduleNames.length;

		openModule(null, moduleMenuOpen);

		if(document.getElementById('text').className=="display")
			loadModuleText();
	}

	else if(code === 37) { // left arrow

		if(art.className!='module') return;

		moduleIndex  = (moduleIndex-1+moduleNames.length)%moduleNames.length;

		openModule(null, moduleMenuOpen);

		if(document.getElementById('text').className=="display")
			loadModuleText();
	}
}

function openModule(index, toggleMenu){

	if(index!=null && index>=0)
		moduleIndex = index;

	document.body.className=moduleNames[moduleIndex];

	document.getElementById('modulename').children[0].innerHTML=moduleNamesActual[moduleIndex].toUpperCase();
	for(var i=0; i<artParts.length; i++){
		artParts[i].className = moduleNames[moduleIndex];
	}

	for(var i=0;i<14;i++){
		sidebarmoduleitems[i].className = moduleNames[moduleIndex];
	}

	if(window.innerHeight>window.innerWidth && toggleMenu)
		toggleModuleMenu();
}

function loadModuleText(index){

	if(index>=0)
		moduleIndex = index;

	document.getElementById('text').className="display";

	document.body.className = document.body.className + " blur";

	document.getElementById('closebtn').style.display='block';

	textpart[moduleIndex].style.display='block';

	for(var i=0;i<13;i++)
	{
		if(i!==moduleIndex)
			textpart[i].style.display='none';
	}

	btnhome.style.display = "none";
	btnmodulemenu.className = ""
}

function closeModuleText(index){

	document.getElementById('text').className="";

	document.body.className = moduleNames[moduleIndex];

	document.getElementById('closebtn').style.display='none';

	btnhome.style.display = "inline-block";
	btnmodulemenu.className = "open";
}

function toggleModuleMenu(){

	document.body.className = moduleMenuOpen ? moduleNames[moduleIndex] : document.body.className +" blurModule";
	btnmodulemenu.className = moduleMenuOpen ? "open" : "close";
	btnhome.style.display = moduleMenuOpen ? "inline-block" : "none";

	for(var i=0;i<6;i++)
		sidebarmoduleitems[i].style.left = moduleMenuOpen ? '-250px' : '0px';

	for(var i=6;i<14;i++)
		sidebarmoduleitems[i].style.right = moduleMenuOpen ? '-250px' : '0px';
		sidebarmoduleitems[12].style.left = moduleMenuOpen ? '-250px' : '0px';


	moduleMenuOpen = !moduleMenuOpen;
}

var coming = document.getElementById('coming');
baritems[3].addEventListener("click",function(){
	coming.className = "";
	setTimeout(function(){
		coming.className = "hide";
	}, 2000)
});

sidebarmoduleitems[13].addEventListener("click",function(){
	window.open('./spark.html');
})