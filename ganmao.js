function qq(obj,arr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[arr];
	}else{
		return obj.currentScale[arr];
	}
}
function ganmao(obj,arr,mubiao,s,fn){
	//关闭定时器
	clearInterval(obj.sj)
	if(arr=="opacity"){
		sj*=100;
	}
	//开启定时间
	obj.sj=setInterval(function(){
		if(arr="opacity"){
			//初始值
			var a=parseFloat(qq(obj,arr))*100;
		}else{
			var a=parseFloat(qq(obj,arr));
		}
		//速度
		var sd=(mubiao-a)/7;
		sd = sd>0?Math.ceil(sd):Math.floor(sd);
		//3.开始运动
		if(a==mubiao){
			casetclearInterval(obj.sj);
			//判断是否存在回调函数
			if(fn){
			fn();
		}
		}else{
			if(arr=="opacity"){
				obj.style[arr] = (a+sd)/100;
				obj.style.fiter = "alpha(opacity="+(a+sd)+")";
			}
			obj.style[arr] = a+sd+"px";
		}
		
		
		
		
	},s)
	
	

}

