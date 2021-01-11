var stop=0
var count=0
var rah=""
var c=0
var b=0
function putzero(nm){
   return nm<10?"0"+nm:nm
}
document.getElementById("btn1").addEventListener("click",function(){


    abc()
    document.getElementById("up").addEventListener("click",function () {
        
        document.getElementById("child").innerHTML=""
        document.getElementById("child").style=""
        count=1
       
            
            upcount()
            btn()
        })
        document.getElementById("down").addEventListener("click",function(){
            xyz()
        })
})
var i=0
var x=0
var y=0
    function upcount(){
        setTimeout(function(){
    if(stop==0){
    document.getElementById("time").innerHTML=putzero(y)+":"+putzero(x)+":"+putzero(i)  
    i++
    if(i<60){
        upcount()
    }else{
        
            x++
            i=0
            if(x<60){
                upcount()
            }else{
                
                    y++
                    x=0
                    upcount()
    
            }

    }
    }
    },1000)
    
    }
function abc(){
    let u=""
    let r=""
    u=`${u}border: solid 1px;width: 113px;padding: 10px 10px 10px 10px;background-color: blanchedalmond;margin-left: 45%;margin-top: 10px;`
    r=`${r}<input type='radio' name='' id='up'>UP<input type='radio' name='' id='down'>DOWN`
    document.getElementById("child").innerHTML=r
    document.getElementById("child").style=u
}
function btn(){
    
    let r=""
    
    r=`${r}<button id="btn2">Stop</button>`
    let x=document.getElementById("btn")
    x.innerHTML=r
   
    
    document.getElementById("btn2").addEventListener("click",function(){
        let x=document.getElementById("time").innerHTML
        document.getElementById("time").innerHTML=x
        stop=1
        rebtn()
    })
}
function rebtn(){
    
    let r=""
    
    r=`${r}<button id="btn3">Start</button>`
    let x=document.getElementById("btn")
    x.innerHTML=r
    
    
      document.getElementById("btn3").addEventListener("click",function(){
        stop=0 
        if (count==0) {
            downcount()
        }else{
            upcount()
        }
        btn()
        
    })
}
function xyz(){
    let u=""
    let r=""
    u=`${u}border: solid 1px;width: 113px;padding: 10px 10px 10px 10px;background-color: blanchedalmond;margin-left: 45%;margin-top: 10px;`
    r=`${r}<input id='num' type='time'><br><button type="submit" id="ok" >OK</button>`
    document.getElementById("child").innerHTML=r
    document.getElementById("child").style=u
    
    document.getElementById("ok").addEventListener("click",function(){
        count=0
        let u=0
        rah=document.getElementById("num")
        u=document.getElementById("num")
        document.getElementById("time").innerHTML=u.value+":00"
        document.getElementById("child").innerHTML=""
        document.getElementById("child").style=""
        var time=u.value
        var str=time.split(":")
         b=str[1]
         c=str[0]
    downcount()
    btn()
    })
}

var a=0


    function downcount(){
        setTimeout(function(){
            if (stop==0) {
                document.getElementById("time").innerHTML=c+":"+b+":"+putzero(a)       
    a--
    if(a>0){
        downcount()
    }else{
        
            b--
            a=60
            if(b>0){
                downcount()
            }else{
                
                    c--
                    b=60
                    downcount()
    
            }

    }
    
            }
    
    },1000)
    
    }
    document.getElementById("btn4").addEventListener("click",function(){
        location.reload()
    })