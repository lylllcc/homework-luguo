window.onload = function(){
	imgLocation("container","box");

}
function imgLocation(parent,content){
	//parent 内容全部取出 取出box
	var cparent = document.getElementById(parent);
	var ccontent = getChildElement(cparent,content);
	var imgWidth = ccontent[0].offsetWidth;
	var num = Math.floor(document.documentElement.clientWidth/imgWidth);
	cparent.style.cssText = "width:"+num*imgWidth+"px;magrin:0 auto;";
	var boxHightArry = [];
	for(var i=0 ;i<ccontent.length;i++){
		
		boxHightArry[i] = ccontent[i].offsetHeight;
		console.log(boxHightArry[i]);
	}
1}
function getChildElement(parent,content){
	var contentArr = [];
	var allcontent = parent.getElementsByTagName("*");
	for(var i = 0 ;i<allcontent.length;i++ ){
		if(allcontent[i].className == content){
			contentArr.push(allcontent[i]);
		}
	}
	return contentArr;
}