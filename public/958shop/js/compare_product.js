var compare_basket_timeout_id;
var compare_basket_count = 4;
var P_PRODUCT_DEFAULT_DOMAIN_URL="http://product.958shop.com/";
var CompareMobileProductListCookieName = "Pop_CompareMobileProductList";
//手机对比时同时将本身加入
function addSelfToCompareProduct(MobileId,ProductName,BrandUrlRewriteChar,ProductImage){
    var cookieName = CompareMobileProductListCookieName;
    var CompareProductList = getcookie(cookieName);
	if (CompareProductList != null && CompareProductList != ""){
		var arrCookies = CompareProductList.split("∈");
		if (arrCookies.length < compare_basket_count){
			if (CompareProductList.indexOf("Σ" + MobileId + "Σ") == -1)
				AddProductCompareSetCookieValue(cookieName,"Σ" + current_id + "Σ" + current_name + "Σ" + current_u + "Σ" + current_img + "Σ",24);
		}
	}else
		AddProductCompareSetCookieValue(cookieName,"Σ" + current_id + "Σ" + current_name + "Σ" + current_u + "Σ" + current_img + "Σ",24);
		
	addToCompareProduct(MobileId,ProductName,BrandUrlRewriteChar,ProductImage);
}
//手机对比
function addToCompareProduct(MobileId,ProductName,BrandUrlRewriteChar,ProductImage){
    var cookieName = CompareMobileProductListCookieName;
    var CompareProductList = getcookie(cookieName);
	if (CompareProductList != null && CompareProductList != ""){
		var arrCookies = CompareProductList.split("∈");
		if (arrCookies.length < compare_basket_count){
			if (CompareProductList.indexOf("Σ" + MobileId + "Σ") != -1)
				alert("（" + ProductName + "）已经被选择了！");
			else
				AddProductCompareSetCookieValue(cookieName,"Σ" + MobileId + "Σ" + ProductName + "Σ" + BrandUrlRewriteChar+ "Σ" + ProductImage + "Σ",24);
		}else
			alert("对不起！您只能选择"+ compare_basket_count +"款同类产品进行比较。");
	}else
		AddProductCompareSetCookieValue(cookieName,"Σ" + MobileId + "Σ" + ProductName + "Σ" + BrandUrlRewriteChar+ "Σ" + ProductImage + "Σ",24);
		
	CreateCompareProductListContainer();
	clearInterval(compare_basket_timeout_id);
    compare_basket_timeout_id = setInterval("init_basket()",250);
}
//将产品信息加入到COOKIE中
function AddProductCompareSetCookieValue(cookieName,cookieValue,expires){
    var existsCookieValue = getcookie(cookieName);
	if (existsCookieValue == null || (existsCookieValue != null && existsCookieValue == ""))
		setcookie(cookieName,cookieValue,expires);
	else{
		if (existsCookieValue.indexOf(cookieValue) == -1){
			var arrCookies = existsCookieValue.split("∈");
			var len = arrCookies.length;
			if (len > 9){//将最后一个
				existsCookieValue = "";
				for (loop=0; loop < 9; loop++){
					existsCookieValue += arrCookies[loop] + "∈";
				}
				existsCookieValue = existsCookieValue.substring(0,existsCookieValue.length - 1);//去掉最后一个∈
			}
            setcookie(cookieName,cookieValue + "∈"+ existsCookieValue,expires);
		}
	}
}
function ShowRemoverProductButton(obj){
    obj.className = 'db2r';
    obj.children[0].children[2].style.display = 'block';
}
function HideRemoverProductButton(obj){
    obj.className = 'db2';
    obj.children[0].children[2].style.display = 'none';
}
//构造对比的窗口
function CreateCompareProductListContainer(){
	var CompareProductList = getcookie(CompareMobileProductListCookieName);
	if (CompareProductList == null)
		CompareProductList = "";
	var arrCookies = CompareProductList.split("∈");
	var cookie_length=0;
	if(arrCookies.length > 0  && (arrCookies[0] != null) && (arrCookies[0] != "")){cookie_length=arrCookies.length;}
	var CompareTable = "<div class=\"db\"><div class=\"db1\"><div class=\"db11\">["+ cookie_length +"/"+ compare_basket_count +"]手机对比篮</div><div class=\"db12\"><img height=\"13\" onClick='HideCompareProductContainerLayer()' style='cursor:pointer' width=\"14\" src='"+ P_PRODUCT_DEFAULT_DOMAIN_URL +"images/db2.gif' alt=\"\"/></div></div>";
    for (i = cookie_length - 1; i >=0; i--){
	    if (arrCookies[i] != null && arrCookies[i] != ""){
			if (arrCookies[i].indexOf("Σ") >= 0){
				var ProductInfo = arrCookies[i].split("Σ");
				if (ProductInfo.length == 6){
					var mobileid = ProductInfo[1];
					var ProductName = ProductInfo[2];
					var BrandUrlRewriteChar = ProductInfo[3];
					var ProductLink = P_PRODUCT_DEFAULT_DOMAIN_URL + "" + BrandUrlRewriteChar +"/" + mobileid + "/index.html";
					var ProductImage = ProductInfo[4];						
					//alert(ProductImg);
					if(ProductImage == "")
						ProductImage = P_PRODUCT_DEFAULT_DOMAIN_URL + "images/default80x60.jpg";
					if (mobileid == null){mobileid = "";}
					if (ProductName == null){ProductName = "";}
					if (ProductLink == null){ProductLink = "";}
					if (ProductImage == null){ProductImage = "";}
					if (ProductName != "" && mobileid != "" && ProductLink != "" && ProductImage != ""){
						CompareTable+="<div class=\"db2\" onmouseover=\"javascript:ShowRemoverProductButton(this);\"  onmouseout=\"javascript:HideRemoverProductButton(this);\"><div class=\"db3\">";
						CompareTable+="<div class=\"db31\"><a target=\"_blank\" href='"+ ProductLink + "'><img height=\"30\" border=\"0\" width=\"40\" src='" + ProductImage + "' alt=\"\"/></a></div>";
						CompareTable+="<div class=\"db32\"><a target=\"_blank\" href='"+ ProductLink + "' title='"+ProductName+"'>" + CutStr(ProductName, 40) + "</a></div>";
						CompareTable+="<div class=\"db33\" style='display:none;'><img alt='移除' height=\"11\" width=\"11\" src='"+ P_PRODUCT_DEFAULT_DOMAIN_URL +"images/db3.gif' style='cursor:pointer' onClick=\"DeleteMobileProductForCompare('" + mobileid + "')\"/></div></div></div>";
					}
				}
			}
		}
	} 
	CompareTable += "<div class=\"db4\"><input type=\"button\" class=\"default_button\" value=\"进行对比\" onClick='ProductCompareCheck()' /></div><div class=\"db5\"><a style='color:blue;cursor:pointer' onClick='EmptyCompareBasket()'>清空对比篮</a></div></div>";
	$("#CompareMobileProductBasket").html(CompareTable);	
}
CreateCompareProductListContainer();
if (getcookie("HiddenCompareBasket") != null && getcookie("HiddenCompareBasket") == "Hide" || 
    getcookie(CompareMobileProductListCookieName) == null || 
    getcookie(CompareMobileProductListCookieName) != null && getcookie(CompareMobileProductListCookieName) == "")
	HideCompareProductContainerLayer();
else
	compare_basket_timeout_id = setInterval("init_basket()",250);

	
function HideCompareProductContainerLayer(){
    clearInterval(compare_basket_timeout_id);
	setcookie("HiddenCompareBasket","Hide",24);
	$("#CompareMobileProductBasket").css("display","none");
}
function ShowCompareProductContainerLayer(){
	setcookie("HiddenCompareBasket","Show",24);
	$("#CompareMobileProductBasket").css("display","block");
}
function init_basket(){
    ShowCompareProductContainerLayer();
    $("#CompareMobileProductBasket").css("top",document.documentElement.scrollTop + 10 + "px");
}
function EmptyCompareBasket(){
    setcookie(CompareMobileProductListCookieName,"",24);
    CreateCompareProductListContainer();
}
function DeleteMobileProductForCompare(MobileId){
    var CompareProductList = getcookie(CompareMobileProductListCookieName);
	if (CompareProductList != null && CompareProductList != ""){
		if (CompareProductList.indexOf("Σ" + MobileId + "Σ") > -1){
			var arrCookies = CompareProductList.split("∈");
			var len = arrCookies.length;
			CompareProductList = "";
			for (i=0; i < len; i++){
				if (arrCookies[i].indexOf("Σ" + MobileId + "Σ") == -1){
					CompareProductList += arrCookies[i] + "∈";
				}
			}
			CompareProductList = CompareProductList.substring(0,CompareProductList.length - 1);//去掉最后一个∈
			setcookie(CompareMobileProductListCookieName,CompareProductList,24);
		}
		CreateCompareProductListContainer();
	}
}
function ProductCompareCheck(){
	var URL = P_PRODUCT_DEFAULT_DOMAIN_URL + "compare/";
	var CompareProductList = getcookie(CompareMobileProductListCookieName);
	if (CompareProductList != null && CompareProductList != ""){
		var arrValues = CompareProductList.split("∈");
		var len = arrValues.length;
		if (len < 2){
			alert ('请至少选择两款同类别产品进行对比！');
			return;
		}else{
		    var QueryString = "";
			for (i = 0; i < len; i++){
				var ProductInfo = arrValues[i].split("Σ"); 
				if (ProductInfo.length = 6){
				    var mobileid = ProductInfo[1];
					QueryString += mobileid+",";				    
				}
			}
			QueryString = QueryString.substring(0,QueryString.length - 1);//截取掉最后一个逗号
			window.open(URL +  QueryString + ".html"); 
		}
	}
}
//对比最新浏览的手机
function LastestBrowseProductCompareCheck(){
    var URL = P_PRODUCT_DEFAULT_DOMAIN_URL + "compare/";
	var arr_chk = oo_name("chk_last_browse_mobile");
	var len = 0;	
	var QueryString = "";
	for(var i=0;i<arr_chk.length;i++){
	    if(arr_chk[i].checked == true){
	        len++;
	        var mobileid = arr_chk[i].value;
	        if (IsNumber(mobileid))
		        QueryString += mobileid+",";
		}				    
	}
	if (len < 2){
		alert ('请至少选择两款同类别产品进行对比！');
		return;
	}
	QueryString = QueryString.substring(0,QueryString.length - 1);//截取掉最后一个逗号
	window.open(URL +  QueryString + ".html");  
}
//清空最新浏览的手机
function ClearLastestBrowseProduct(temp_cookiename){
    setcookie(temp_cookiename,"",24);
    $("#LastestBrowseMobileProduct").html("");
}
function getcookie(name) {
    var strArg=name+"=";
	var nArgLen=strArg.length;
	var nCookieLen=document.cookie.length;
	var nEnd;
	var i=0;
	var j;

	while (i<nCookieLen)
	{
		j=i+nArgLen;
		if (document.cookie.substring(i,j)==strArg)
		{
			nEnd=document.cookie.indexOf (";",j);
			if (nEnd==-1) nEnd=document.cookie.length;
			return unescape(document.cookie.substring(j,nEnd));
		}
		i=document.cookie.indexOf(" ",i)+1;
		if (i==0) break;
	}
	return null;
}
function setcookie(cookieName, cookieValue, hours) {
	var exp = new Date();
	exp.setTime(exp.getTime()+hours*60*60*1000);
	document.cookie=cookieName+"="+escape(cookieValue)+";expires="+exp.toGMTString()+";path=/";
}
function CutStr(str, length){   
   var a = str.replace(/([\u0391-\uffe5])/ig, '$1a');
   var b = a.substring(0, length);
   var c = b.replace(/([\u0391-\uffe5])a/ig, '$1');
   return c;
}

function resizeImage(img,w,h)
{
    
        var image=new Image();
        image.src = img.src;
        if(image.width > 0 && image.height > 0)
        {
            if(image.width / image.height >= w/h)
            {
                if(image.width > w)
                {
                    img.width = w;
                    img.height = (image.height * w) / image.width;
                }
                else
                {
                    img.width = image.width;
                    img.height = image.height;
                }
                //img.alt=image.width+"×"+image.height;
            }
            else
            {
                if(image.height > h)
                {
                    img.height = h;
                    img.width = (image.width * h) / image.height;
                }
                else
                {
                    img.width = image.width;
                    img.height = image.height;
                }
            }
       }

}

function DrawImage(_s, _w, _h)
{
	var image = new Image(); 
	image.src = _s.src; 
	if(image.width > _w || image.height > _h)
	{
	    var cw = 0;
	    var ch = 0;
	    
	    cw = _w;
	    ch = (image.height*_w)/image.width;
	    if(ch > _h)
	    {
	        cw = (cw*_h)/ch;
	        ch = _h;
	    }
	    
	    _s.width = cw;
		_s.height = ch;
	}
}

jQuery.fn.slider = function(settings) {   
             
            settings = jQuery.extend({
                width: 300,
                height: 250,
                txtHeight: 25
            },
            settings);
           var css = {
            dl:{
                height:settings.height-settings.txtHeight,
                width:settings.width,
                padding:0, 
                margin:0,
                position:"relative",
                overflow:"hidden"
            },
            dd:{
                position:"absolute",
                width: "100%",
                "list-style":"none",
                top: "0px",
                left: "0px",
                padding:0, 
                margin:0,
                overflow:"hidden"
            },
            dt:{
                position:"absolute",
                width: "100%",
                "list-style":"none",
                right: "0px",
                bottom: "0px",
                padding:0, 
                margin:0,
                overflow:"hidden"
            },
            span:{
                "text-align": "center",
                "border-left": "#ffffff 1px solid",
                width: "24px",
                display: "block",
                font: "10px Arial, Helvetica, sans-serif",
                background:" #000000",
                "float": "right",
                height: "100%",
                color: "#ffffff",
                cursor: "pointer"
            },
            cur:{
                background: "#ce0609",
                color: "#ffffff",
                filter: "Alpha(opacity=100)",
                opacity: "1.0"
            },
            normal:{
                filter: "Alpha(opacity=50)",
                background: "#000000",
                color: "#ffffff",
                opacity: "0.5"
            },
            a:{
                width: "100%",
                display: "block",
                height: "100%",
                color: "#ffffff"
            },
            div:{
                "text-align": "center",
                width:settings.width,
                height:settings.txtHeight,
                "vertical-align":"middle",
                "line-height":settings.txtHeight+"px",
                overflow:"hidden"
            }
           };
             
            var s = this; 
            var fs = 1;
            var pics = s.children("dl").find("dd");
            s.children("dl").css(css.dl);
            pics.css(css.dd);
            var nav =s.children("dl").append("<dt></dt>").find("dt");
            nav.css(css.dt);
            var sLink =s.append("<div></div>").find("div");
            var navSite = pics.size();
            pics.eq(fs -1).show().siblings("dd").hide();
            sLink.css(css.div);
            setTxt(fs);
            for(var i = navSite;i >0 ;i--){
                if(i == fs){
                    nav.append("<span class='cur'><a>"+i+"</a></span>");
                }else{
                    nav.append("<span class='normal'><a>"+i+"</a></span>");
                }
            };
            nav.children("span").css(css.span);
            nav.children("span.cur").css(css.cur);
            nav.children("span.normal").css(css.normal);
            nav.children("span").find("a").css(css.a);
             var myTime = setInterval(function(){
                fs++;
               if(fs>navSite){fs=1;}
               show(fs);
            } , 3000);
            
            function show(i){
              pics.eq(i - 1).stop(true,true).fadeIn(300).siblings("dd").fadeOut(300);
              nav.children("span").eq(navSite - i).addClass("cur").removeClass("normal").siblings("span").removeClass("cur").addClass("normal");
              nav.children("span.cur").css(css.cur);
              nav.children("span.normal").css(css.normal);
              setTxt(i);
            };
            nav.children("span").mousedown(function(){
                fs =navSite - nav.find("span").index(this);
                show(fs);
            });
            function setTxt(i){
                var fsA = pics.eq(i - 1).find("a");
                sLink.empty().append("<a href='"+fsA.attr("href")+"' title='"+fsA.attr("title")+"' target='_blank'>" + fsA.attr("title")+"</a>");
            };
        };