var height = window.innerHeight;
var teammain = document.getElementById('teammain');



var sections = document.getElementsByTagName('section');
console.log(sections);

var ind = 0;
var indlen = sections.length;
var temp;

function sscroll(id){

    if(id>=0){
        ind = id;
    }

    teammain.scroll({
        top: sections[ind].offsetTop+30,
        left: 0,
        behavior: 'smooth'
    });
}

document.getElementById('next').addEventListener('click', function(){

    temp = ind+1
    if(temp>=0 && temp<indlen)
        ind = temp;
    sscroll();
})

document.getElementById('prev').addEventListener('click', function(){

    temp = ind-1;
    if(temp>=0 && temp<indlen)
        ind = temp;
    sscroll();
})

document.getElementById('ni1').addEventListener("click",function(){
    sscroll(0);
});

document.getElementById('ni2').addEventListener("click",function(){
    sscroll(1);
});

document.getElementById('ni3').addEventListener("click",function(){
    sscroll(2);
});

document.getElementById('ni4').addEventListener("click",function(){
    sscroll(3);
});

document.getElementById('ni5').addEventListener("click",function(){
    sscroll(4);
});

document.getElementById('ni6').addEventListener("click",function(){
    sscroll(5);
});

document.getElementById('ni7').addEventListener("click",function(){
    sscroll(6);
});

document.getElementById('ni8').addEventListener("click",function(){
    sscroll(7);
});

document.getElementById('ni9').addEventListener("click",function(){
    sscroll(8);
});
document.getElementById('ni10').addEventListener("click",function(){
    sscroll(9);
});
document.getElementById('ni11').addEventListener("click",function(){
    sscroll(10);
});
document.getElementById('ni12').addEventListener("click",function(){
    sscroll(11);
});
document.getElementById('ni13').addEventListener("click",function(){
    sscroll(12);
});
document.getElementById('ni14').addEventListener("click",function(){
    sscroll(13);
});
document.getElementById('ni15').addEventListener("click",function(){
    sscroll(14);
});
document.getElementById('ni16').addEventListener("click",function(){
    sscroll(15);
});
document.getElementById('ni17').addEventListener("click",function(){
    sscroll(16);
});
document.getElementById('ni18').addEventListener("click",function(){
    sscroll(17);
});
document.getElementById('ni19').addEventListener("click",function(){
    sscroll(18);
});
var moduleIndex = 0;
var team_array = document.getElementById('head_info').children;



function loadModuleHeads(index){



    if(index>=0)
        moduleIndex = index;

    document.getElementById('head_info').className="display";

    document.body.className = document.body.className + " blur";

    document.getElementById('headinfo_closebtn').style.display='block';

    team_array[moduleIndex].style.display='block';

    for(var i=0;i<16;i++)
    {
        if(i!==moduleIndex)
            team_array[i].style.display='none';
    }


}

function closeModuleHeads(index){



    document.getElementById('head_info').className="";

    // document.body.className = team_array[moduleIndex];

    document.getElementById('headinfo_closebtn').style.display='none';
    document.body.className = "";


}
//
// window.onload = function(){
//
//
//
//     initialize();
//
// }
//
// function initialize(){}
document.getElementById('head_info_16').addEventListener("click", function(){
      setTimeout(function(){
             loadModuleHeads(14);
         }, 300);
     });
document.getElementById('head_info_15').addEventListener("click", function(){
      setTimeout(function(){
             loadModuleHeads(13);
         }, 300);
     });

document.getElementById('head_info_14').addEventListener("click", function(){
      setTimeout(function(){
             loadModuleHeads(12);
         }, 300);
     });
 document.getElementById('head_info_13').addEventListener("click", function(){
      setTimeout(function(){
             loadModuleHeads(11);
         }, 300);
     });

 document.getElementById('head_info_11').addEventListener("click", function(){
      setTimeout(function(){
             loadModuleHeads(10);
         }, 300);
    });


document.getElementById('head_info_10').addEventListener("click", function(){
        setTimeout(function(){
            loadModuleHeads(9);
        }, 300);
    });


document.getElementById('head_info_9').addEventListener("click", function(){
        setTimeout(function(){
            loadModuleHeads(8);
        }, 300);
    });


document.getElementById('head_info_8').addEventListener("click", function(){
        setTimeout(function(){
            loadModuleHeads(7);
        }, 300);
    });





document.getElementById('head_info_7').addEventListener("click", function(){
        setTimeout(function(){
            loadModuleHeads(6);
        }, 300);
    });


document.getElementById('head_info_6').addEventListener("click", function(){
        setTimeout(function(){
            loadModuleHeads(5);
        }, 300);
    });


document.getElementById('head_info_5').addEventListener("click", function(){
        setTimeout(function(){
            loadModuleHeads(4);
        }, 300);
    });





document.getElementById('head_info_4').addEventListener("click", function(){
        setTimeout(function(){
            loadModuleHeads(3);
        }, 300);
    });


document.getElementById('head_info_3').addEventListener("click", function(){
        setTimeout(function(){
            loadModuleHeads(2);
        }, 300);
    });


// document.getElementById('head_info_2').addEventListener("click", function(){
//      setTimeout(function(){
//             loadModuleHeads(2);
//         }, 300);
//     });


document.getElementById('head_info_1').addEventListener("click", function(){
        setTimeout(function(){
            loadModuleHeads(0);
        }, 300);
    });




document.getElementById('head_info_2').addEventListener("click", function(){
    setTimeout(function(){
        loadModuleHeads(0);
    }, 300);
});





    document.getElementById('headinfo_closebtn').addEventListener("click", function(){

        setTimeout(function(){
            closeModuleHeads();
        },300);
    });





