/*<![CDATA[*/
 var s=[],s_timer=[];
 
 function show(id,h,spd){
 	s[id]= s[id]==spd? -spd : spd;
 	s_timer[id]=setTimeout(function() {
	 	var obj=document.getElementById(id);
	 	if(obj.offsetHeight+s[id]>=h){
	 		obj.style.height=h+"px";obj.style.overflow="auto";}
	 	else if
	 		(obj.offsetHeight+s[id]<=0){obj.style.height=0+"px";obj.style.display="none";}
	 		else {
	 			obj.style.height=(obj.offsetHeight+s[id])+"px";
	 			obj.style.overflow="hidden";
	 			obj.style.display="block";
	 			setTimeout(arguments.callee, 10);
	 		}
	 	}, 10);
 	obj.style.onclick="";
 }
 /*]]>*/