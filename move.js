function getStyleAttr(obj, attr) {
	if(window.getComputedStyle) { //支持IE9+, 谷歌, 火狐..获取页面元素样式
	return getComputedStyle(obj, null)[attr];
	
	}else{
		return obj.currentStyle[attr]; //支持IE8-
    }
}
/*
 obj 对象
 attr 属性
 target 目标值
 s 定时器执行速度
 fn 回调函数
 * */
function move(obj,attr,target,s,fn){
	//关闭定时器
	clearInterval(obj.timer);
	if(attr=="opacity"){
		target*=100;
	}
	//开启定时器
	obj.timer = setInterval(function(){
		//1.初始值
		if(attr=="opacity"){
			var start = parseFloat(getStyleAttr(obj,attr))*100;
		}else{
			var start = parseFloat(getStyleAttr(obj,attr));
		}
		
		//2.速度
		var speed = (target-start)/7;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		//3.开始运动
		if(start==target){
			clearInterval(obj.timer);
			//判断是否存在回调函数
			if(fn){
				fn();
			}
		}else{
			if(attr=="opacity"){
				obj.style[attr] = (start+speed)/100;
				obj.style.fiter = "alpha(opacity="+(start+speed)+")";
			}
			obj.style[attr] = start+speed+"px";
		}
	},s)
}
