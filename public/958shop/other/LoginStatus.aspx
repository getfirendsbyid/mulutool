
if(typeof(p_default_domain) == 'undefined')
    p_default_domain = "http://www.958shop.com/";
    
function is_login_player(){ 
	var status = "0"; 
	if(status=="1") 
		return true; 
	else 
		return false; 
}
function ValidateUserLoginStatus(){
    if(is_login_player()){
        var __html= "<span>您好,<a href='http://u.958shop.com/' rel='nofollow'>"+GetUserName()+"</a></span><a href='javascript:ToLoginUserLoginOut();' rel='nofollow'>[退出]</a>";
        if( document.getElementById("div_UserLoginTrue") != null ){
            document.getElementById("div_UserLoginTrue").innerHTML = __html;
            document.getElementById("div_UserLoginTrue").style.display = "";
        }
    }else{
        if(document.getElementById("div_UserLoginFalse") != null)
            document.getElementById("div_UserLoginFalse").style.display = "";    
    }        
}
function GetUid(){ 
	var uid = "0"; 
	return uid; 
}
function GetUserName(){
	var ua = "";
	return ua;
}
function ToLoginUserLoginOut(){
$.ajax({
            url:p_default_domain + "Ajax/Login.aspx",
            cache: false,
            dataType: "text",
            data: 'Module=TOLOGOUTFORPLAYER',
            beforeSend: function (result) {
            },
            success: function (result) {
                window.location = window.location.href; 
            },
            error: function (XmlHttpRequest, textStatus, errorThrown) { alert(XmlHttpRequest.responseText); }
        });
       
}
function writeLoginFailedTimes(cookieName){
    var times = getLoginFailedTimes(cookieName);
    times = parseInt(times) + 1;
    setCookie_1(cookieName,times,1);
}

function getLoginFailedTimes(cookieName){
    if(getCookie_1(cookieName) == null || getCookie_1(cookieName) == "")
        return 0;
    else
        return getCookie_1(cookieName);
}
function reg(){
    var url = window.location.href;
    url = escape(url);
    window.location = "http://reg.958shop.com/reg.html?ref_url=" + url;
}
function getpwd(){
    window.location = "http://reg.958shop.com/password/?action=getpass";
}
function doSearchProductMobile(){
    var txt = document.search_mobile_form.wd;
	if($(txt).val() == "" || $(txt).val()  == "请输入手机型号/名称" || $(txt).val() .indexOf("请输入") >= 0){
        txt.select();
        $(txt).focus()
        alert("请输入手机型号/名称");
        return false;
    }
    document.search_mobile_form.submit();
}
function SearchArticle(){
    var txt = document.search_article_form.keyword;
    if($(txt).val() == "" || $(txt).val().indexOf("关键字") >= 0){
        txt.select();
        $(txt).focus()
        alert("请输入关键字");
        return false;
    }
	window.location = "http://zhannei.958shop.com/cse/search?q="+ encodeURI($(txt).val()) +"&s=4662169342298144153&nsid=5&";  
    //document.search_article_form.submit();
}
function SearchSubject(){
    var txt = document.search_subject_form.keyword;
       if($(txt).val() == "" || $(txt).val()  == "搜索关键字" || $(txt).val() .indexOf("请输入") >= 0){
        txt.select();
        $(txt).focus()
        alert("请输入搜索关键字");
        return false;
    }	
    document.search_subject_form.submit();
}


function LoadShareButton(){
    document.writeln("<div style=\"width:620px;padding:10px 0px 0px 0px;float:left;\">");
    document.writeln("<!-- Baidu Button BEGIN -->");
    document.writeln("<div id=\"bdshare\" class=\"bdshare_t bds_tools get-codes-bdshare\">");
    document.writeln("<span class=\"bds_more\">分享到：</span>");
    document.writeln("<a class=\"bds_baidu\">百度搜藏<\/a>");
    document.writeln("<a class=\"bds_qzone\">QQ空间<\/a>");
    document.writeln("<a class=\"bds_tsina\">新浪微博<\/a>");
    document.writeln("<a class=\"bds_tqq\">腾讯微博<\/a>");
    document.writeln("<a class=\"bds_renren\">人人网<\/a>");
    document.writeln("<a class=\"shareCount\"><\/a>");
    document.writeln("<\/div>");
    document.writeln("<script type=\"text\/javascript\" id=\"bdshare_js\" data=\"type=tools&amp;uid=11669\" ><\/script>");
    document.writeln("<script type=\"text\/javascript\" id=\"bdshell_js\"><\/script>");
    document.writeln("<script type=\"text\/javascript\">");
    document.writeln("document.getElementById(\"bdshell_js\").src = \"http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=\" + Math.ceil(new Date()\/3600000);");
    document.writeln("<\/script>");
    document.writeln("<!-- Baidu Button END -->");
    document.writeln("<\/div>");
}