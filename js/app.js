window.onload = function(){
	imgLocation("container","box");

}
function imgLocation(parent,content){
	//parent 内容全部取出 取出box
	var cparent = document.getElementById(parent);
	var ccontent = getChildElement(cparent,content);
	console.log("!2");

}
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