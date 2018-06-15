var www_default_domain = "http://www.958shop.com/";
function ADS_SHOW_958SHOP(ads_id){
    var tt = new Date();    
    var rndQs = tt.getMilliseconds() + '_' + tt.getSeconds();    
    var span_id = "span_" + tt.getHours()+ "_" + tt.getMinutes() + "_" + tt.getSeconds()  + "_" + tt.getMilliseconds() + "_" + ads_id.replace(/-/g, "");
    document.write("<span id='"+ span_id +"'></span>");
    load_ads_script(www_default_domain + "ajax/Ajax_Advertisement.aspx?Module=ADS_SHOW_958SHOP" + "&ads_id=" + ads_id + "&container=" + span_id + "&" + rndQs,ads_render,ads_id.toLowerCase().replace(/-/g, ""));     
}
function ADS_SHOW2_958SHOP(ads_id,brand){   
    if (brand != "")
        ads_id = brand.toUpperCase() + "_" + ads_id;
    var tt = new Date();    
    var rndQs = tt.getMilliseconds() + '_' + tt.getSeconds();    
    var span_id = "span_" + tt.getHours()+ "_" + tt.getMinutes() + "_" + tt.getSeconds()  + "_" + tt.getMilliseconds() + "_" + ads_id.replace(/-/g, "");
    document.write("<span id='"+ span_id +"'></span>");
    load_ads_script(www_default_domain + "ajax/Ajax_Advertisement.aspx?Module=ADS_SHOW_958SHOP" + "&ads_id=" + ads_id + "&container=" + span_id + "&brand=" + brand + "&" + rndQs,ads_render,ads_id.toLowerCase().replace(/-/g, ""));         
}
function ads_render(ads_result,div_container){
    if(typeof(ads_result) != 'undefined'){
        if(ads_result.indexOf("201 ex:") < 0){
            if(document.getElementById(div_container))
                document.getElementById(div_container).innerHTML = unescape(ads_result);                       
        }
    }
}
function load_ads_script(scriptUrl,callback,ads_id){
    var scp = document.createElement("script");
	scp.type = "text/javascript";
	scp.id = "js_" + ads_id;
	scp.src = scriptUrl;
 
	document.getElementsByTagName("head")[0].appendChild(scp);
	
	if(scp.readyState)
	{
		scp.onreadystatechange = function()
		{ 
			if(scp.readyState == "loaded")
			{
			    try{
			        if(callback && 'function' == typeof callback)callback(eval('ads_' + ads_id),eval('container_' + ads_id));
			    }catch(ex){}
			    dispose_ads_js(scp.id);			
			}
		}
	}	
	else
	{
		scp.onload = function()
		{
		    try{
			    if(callback && 'function' == typeof callback)callback(eval('ads_' + ads_id),eval('container_' + ads_id));
			}catch(ex){}
			dispose_ads_js(scp.id);
		}
	}
}
function dispose_ads_js(ele_id){
       
	var eleObj = document.getElementById(ele_id);
	if(eleObj && eleObj.parentNode){
		eleObj.parentNode.removeChild(eleObj);
	}
}

function setCookie_1(name,value,time){
    //time:以小时为单位
      var exp = new   Date();
      if(time != undefined)
         exp.setTime(exp.getTime() + 60*60*1000*parseFloat(time));   
      else
         exp.setTime(exp.getTime() + 60*60*1000);   
      document.cookie   = name + "="+   escape(value)   +";expires="+   exp.toGMTString();   
}   
function getCookie_1(name){ 
   var search;
   search = name + "="
   offset = document.cookie.indexOf(search) 
   if (offset != -1) {
    offset += search.length ;
    end = document.cookie.indexOf(";", offset) ;
    if (end == -1)
      end = document.cookie.length;
    return unescape(document.cookie.substring(offset, end));
  }
  else
     return "0";
}  
function deleteCookie_1(name){ 
    var expdate = new Date(); 
    expdate.setTime(expdate.getTime() - (86400 * 1000 * 1));
    setCookie_1(name, "", expdate); 
}
function initStorePopAds()
{
	/*if(getCookie_1("StorePopAds20091229") != "1"){
		var link_url = "http://b2c.958shop.com/iocean/ousheng/m55.html";
		var link_title = "欧盛M55";
		var width = window.screen.width;
        var height = window.screen.height - 20;
		window.document.body.onclick  = function(){window.document.body.onclick="";window.open(link_url, "","toolbar=no,location=yes,directories=no,menubar=yes,scrollbars=yes,resizable=yes,status=yes,top=0,left=0,width="+ width  +",height=" + height);}
		setCookie_1("StorePopAds20091229","1",1);
	}*/
}

function AutoChangeSizeForImage(obj,max_width,max_height){    
	if(typeof(isneed_pop) == 'undefined')
        isneed_pop = true;
    var IsChangeSize = false;
    var obj_width = obj.width;
    var obj_height = obj.height;    
    if(obj_width - obj_height == 2) {
        obj.height = max_height;
        obj.width = obj_width * max_height / obj_height;
        return;
    }
    if(obj_width <= max_width && obj_height <= max_height) 
        return;
    if(obj_height > obj_width){//以最大的高度为准
        if(obj.height > max_height){        
            obj.height = max_height;
            IsChangeSize = true;
            obj.width = obj_width * max_height / obj_height;
        }else if(obj.width > max_width){
            IsChangeSize = true;
            obj.width = max_width; 
            obj.height = obj_height * max_width / obj_width;
        }
    }else if(obj_width > obj_height){//以最大的宽度为准
        if(obj.width > max_width){
            IsChangeSize = true;
            obj.width = max_width; 
            obj.height = obj_height * max_width / obj_width;
        }else if(obj.height > max_height){
            obj.height = max_height;
            IsChangeSize = true;
            obj.width = obj_width * max_height / obj_height;
        }
    }
}

function WriteAdForB2bCn(){
	document.writeln("<script type=\"text/javascript\">var mainone_bcode_codetype=2;var mainone_bcode_chinaname=\"百信手机网\";var mainone_bcode_searchdomain=\"www.958shop.com/Search\";var mainone_bcode_urlcode=\"keyword\";var mainone_bcode_width=290;var mainone_bcode_bgcolor=\"\";var mainone_bcode_style=4;var mainone_bcode_leftcut=\"\";var mainone_bcode_rightcut=\"\"; var mainone_bcode_bdcolor=\"\"; var mainone_bcode_id=-1;</script><script src=\"http://acode.b2b.cn/JS/Detail.js\" type=\"text/javascript\"></script>");
}
function WriteAdForB2bCn200(){
    document.writeln("<script type=\"text/javascript\">var mainone_wordtype=1;var mainone_bcode_chinaname=\"百信手机网\";var mainone_bcode_searchdomain=\"958shop.com\";var mainone_mainword=\"keyword\";var mainone_if_width=200;var mainone_color_bg=\"\";var mainone_color_bd=\"\";var mainonestyle=12;var mainone_color_txthover=\"\";var mainone_color_txtbg=\"\"; </script><script src=\"http://acode.b2b.cn/JS/Keyword_New.js\" type=\"text/javascript\"></script>");
}
function WriteAdForB2bCnWidth(w){
	document.writeln("<script type=\"text\/javascript\">var mainone_bcode_codetype=1;var mainone_bcode_chinaname=\"百信手机网\";var mainone_bcode_searchdomain=\"958shop.com\";var mainone_bcode_urlcode=\"keyword\";var mainone_bcode_width="+ w +";var mainone_bcode_bgcolor=\"\";var mainone_bcode_style=4;var mainone_bcode_leftcut=\"\";var mainone_bcode_rightcut=\"\"; var mainone_bcode_bdcolor=\"\";<\/script><script src=\"http:\/\/acode.b2b.cn\/JS\/Detail.js\" type=\"text\/javascript\"><\/script>");
}
function WriteAdForB2bCnSearch(){
	document.writeln("<script type=\"text/javascript\">var mainone_wordtype=1;  var mainone_mainword=\"keyword\";var mainone_if_width=290;var mainone_color_bg=\"\";var mainone_color_bd=\"\";var mainonestyle=12;var mainone_color_txthover=\"\";var mainone_color_txtbg=\"\"; </script><script src=\"http://acode.b2b.cn/JS/Keyword_New.js\" type=\"text/javascript\"></script>");
}
//下载站资源详细页右侧
function ali_d_detail(){
	 document.write('<div style="padding-top:5px;padding-bottom:5px;width:254px;float:left;background-color:#ffffff;padding-left:4px;"><a style="display:none!important" id="tanx-a-mm_44196839_8788689_29710432"></a></div>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_44196839_8788689_29710432";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_44196839_8788689_29710432";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);

	 if(oo("p_d_ads_detail") != null){
		 oo("p_d_ads_detail").style.display = "";
     }

}

//下载站文章详细页右侧
function ali_d_article_detail(){
	 /*
     document.write('<div style="padding-top:5px;padding-bottom:5px;width:254px;float:left;background-color:#ffffff;padding-left:4px;"><a style="display:none!important" id="tanx-a-mm_43007071_4020822_13162295"></a></div>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_43007071_4020822_13162295";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_13162295";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
     */
}

//大全综述页
function ali_product_detail(){
     //ali_article_detail();
	 return;
	 document.write('<a style="display:none!important" id="tanx-a-mm_43007071_4020822_25050239"></a>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_43007071_4020822_25050239";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_25050239";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
}

//大全资讯页
function ali_product_article_detail(){
     document.write('<a style="display:none!important" id="tanx-a-mm_43007071_4020822_13180655"></a>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_43007071_4020822_13180655";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_13180655";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
}

//资讯详细页
function ali_article_detail(){
	 return;
     document.write('<a style="display:none!important" id="tanx-a-mm_43007071_4020822_24556277"></a>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_43007071_4020822_24556277";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_24556277";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
}
//资讯详细页
function ali_article_detail2(){
	 return;
     document.write('<a style="display:none!important" id="tanx-a-mm_43007071_4020822_24540545"></a>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_43007071_4020822_24540545";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_24540545";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
}

//资讯详细页右侧
function ali_article_detail_right(){
	 return;
	 document.write('<div style="padding-top:0px;padding-bottom:0px;width:270px;float:left;background-color:#ffffff;padding-left:0px;"><a style="display:none!important" id="tanx-a-mm_43007071_4020822_20854665"></a></div>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_43007071_4020822_20854665";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_20854665";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);

}

//商城知识库
function ali_b2c_tag(flag){
	 if(flag == 1){
		 document.write('<a style="display:none!important" id="tanx-a-mm_43007071_4020822_15746915"></a>');
		 tanx_s = document.createElement("script");
		 tanx_s.type = "text/javascript";
		 tanx_s.charset = "gbk";
		 tanx_s.id = "tanx-s-mm_43007071_4020822_15746915";
		 tanx_s.async = true;
		 tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_15746915";
		 tanx_h = document.getElementsByTagName("head")[0];
		 if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild); 
	 }else{
		 document.write('<a style="display:none!important" id="tanx-a-mm_43007071_4020822_15746913"></a>');
		 tanx_s = document.createElement("script");
		 tanx_s.type = "text/javascript";
		 tanx_s.charset = "gbk";
		 tanx_s.id = "tanx-s-mm_43007071_4020822_15746913";
		 tanx_s.async = true;
		 tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_15746913";
		 tanx_h = document.getElementsByTagName("head")[0];
		 if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
	 }
}
//大全列表
function ali_product_list(){
     document.write('<a style="display:none!important" id="tanx-a-mm_43007071_4020822_13098376"></a>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_43007071_4020822_13098376";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_13098376";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
}

//下载站软件列表
function ali_d_soft_list(){
	 /*
     document.write('<div style="padding-top:5px;padding-bottom:5px;width:254px;float:left;background-color:#ffffff;padding-left:4px;"><a style="display:none!important" id="tanx-a-mm_43007071_4020822_13110092"></a></div>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_43007071_4020822_13110092";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_13110092";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
	 */
}

//下载站软件频道
function ali_d_soft(){
	 /*
     document.write('<div style="padding-top:5px;padding-bottom:5px;width:254px;float:left;background-color:#ffffff;padding-left:4px;"><a style="display:none!important" id="tanx-a-mm_43007071_4020822_13106135"></a></div>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_43007071_4020822_13106135";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_13106135";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
     */
}

//下载站主题频道
function ali_d_theme(){
	 /*
     document.write('<div style="padding-top:5px;padding-bottom:5px;width:254px;float:left;background-color:#ffffff;padding-left:4px;"><a style="display:none!important" id="tanx-a-mm_43007071_4020822_13094633"></a></div>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_43007071_4020822_13094633";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_13094633";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
	 */
}

//7794富媒体广告
function union_right_bottom(flag){
    //if(flag == 1)
    //    document.writeln("<script src=\"http://v.7794.com/adscpv/i.php?z=19054\"></script>");
}

//下载站机型页
function ali_d_mobile(){
	 //2014.08.19
	 /*
	 document.write('<a style="display:none!important" id="tanx-a-mm_43007071_4020822_24556277"></a>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_43007071_4020822_24556277";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_24556277";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
	 */
}

//下载站机型资源页
function ali_d_mobile_app(flag){
	 /*
	 if(flag == 1){//250*250
		 document.write('<a style="display:none!important" id="tanx-a-mm_43007071_4020822_13522507"></a>');
		 tanx_s = document.createElement("script");
		 tanx_s.type = "text/javascript";
		 tanx_s.charset = "gbk";
		 tanx_s.id = "tanx-s-mm_43007071_4020822_13522507";
		 tanx_s.async = true;
		 tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_13522507";
		 tanx_h = document.getElementsByTagName("head")[0];
		 if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
	 }else{
		 //2014.08.19
		 document.write('<a style="display:none!important" id="tanx-a-mm_43007071_4020822_24540540"></a>');
		 tanx_s = document.createElement("script");
		 tanx_s.type = "text/javascript";
		 tanx_s.charset = "gbk";
		 tanx_s.id = "tanx-s-mm_43007071_4020822_24540540";
		 tanx_s.async = true;
		 tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_24540540";
		 tanx_h = document.getElementsByTagName("head")[0];
		 if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
	 }
	 */
}

//大全首页
function ali_product_index(){
     document.write('<div style="padding-top:5px;padding-bottom:5px;width:190px;float:left;text-align:center;"><a style="display:none!important" id="tanx-a-mm_43007071_4020822_13126118"></a></div>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_43007071_4020822_13126118";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_13126118";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
}

//大全参数页、下载页 
function ali_product_mobile_detail(){
 	//2014.08.19
	 return;
     document.write('<a style="display:none!important" id="tanx-a-mm_43007071_4020822_24558277"></a>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_43007071_4020822_24558277";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_24558277";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
}

//大全点评页
function ali_product_mobile_comment(){
     ali_d_mobile_app(2);
}

//大全图片页
function ali_product_mobile_image(){
     return;
     document.write('<a style="display:none!important" id="tanx-a-mm_43007071_4020822_24540540"></a>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_43007071_4020822_24540540";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_43007071_4020822_24540540";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
}

//下载站通用250*250
function ali_d_common_250(){
     ali_d_mobile();
}
//新版手机大全首页
function ali_newproduct_index(){
	 document.write('<a style="display:none!important" id="tanx-a-mm_44196839_8788689_29588650"></a>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_44196839_8788689_29588650";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_44196839_8788689_29588650";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
}
//新版手机大全详细页首页
function ali_newproduct_detail_index(){
	 document.write('<a style="display:none!important" id="tanx-a-mm_44196839_8788689_29598499"></a>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_44196839_8788689_29598499";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_44196839_8788689_29598499";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
}
//新版手机大全顶部
function ali_newproduct_top(){
	 document.write('<a style="display:none!important" id="tanx-a-mm_44196839_8788689_29696556"></a>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_44196839_8788689_29696556";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_44196839_8788689_29696556";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
}
//新版手机大全详细页右下角
function ali_newproduct_detail_right_bottom(){
	 document.write('<a style="display:none!important" id="tanx-a-mm_44196839_8788689_29702577"></a>');
     tanx_s = document.createElement("script");
     tanx_s.type = "text/javascript";
     tanx_s.charset = "gbk";
     tanx_s.id = "tanx-s-mm_44196839_8788689_29702577";
     tanx_s.async = true;
     tanx_s.src = "http://p.tanx.com/ex?i=mm_44196839_8788689_29702577";
     tanx_h = document.getElementsByTagName("head")[0];
     if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
}