# QQuery
QQuery: Quanta内部的类似于JQuery的开放框架

### 1.选择器部分
    window.onload = function(){
        
        //QQuery对象
    	var main = $$("#main");
    	main.appendChild("append");
    	
    	//JS对象
    	var test = $$("#main")[0];
    	console.log(test)
    }
