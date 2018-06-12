
//function doLoad(){ 
//    var user=$("#userName").val(); 
//    if(user.length==0){$("#userName").focus(); return false; }
//    var pwd=$("#pwd").val(); 
//    if(pwd.length==0){ $("#pwd").focus(); return false; }
//    $.get(p_default_root_url+"ajax/service_handle.aspx", "Module=ARTICLECOMMENTLISTLOGIN&password=" + pwd+"&username="+user, function (text) {
//        if(text=="1"){  window.location.reload();  return;}
//        else { alert("用户名或密码不正确！");$("#userName").focus(); }
//    }, "text");
//}
//function doRegion(){  window.open("http://reg.958shop.com/reg.html?ref_url="+p_url); }
//function doLoad(){ window.open("http://reg.958shop.com/?ref_url="+p_url);}
function subCommet(){
    var comment=$("#txt_comment").val();
    if(comment=="发表评论"||comment.length==0){  $("#txt_comment").focus(); return false; }
    var inputName=$("#inputName").val();
    if(inputName.length==0){ alert("评论不留名，莫非您真的是活雷锋！"); $("#inputName").focus(); return false;} 
    $.get(p_default_root_url+"ajax/service_handle.aspx", "Module=ARTICLECOMMENTSUBMIT&comment=" + comment+"&inputName="+inputName+"&articleId="+articleId, function (text) { 
        if(text=="1"){              alert("谢谢您的评论\r\n评论审核通过后就可以展示了哦.");   $("#txt_comment").val("");            return; }
        else {  alert("服务器繁忙，请稍后再试！");  }
    }, "text"); 
}
function doSupport(falg,com_id,obj){
    $.get(p_default_root_url+"ajax/service_handle.aspx", "Module=ARTICLECOMMENTSUPPORT&com_id=" + com_id+"&falg="+falg, function (text) { 
        if(text>0){      
             $(obj).attr('onclick','');    $(obj).removeAttr('href');   
            if(falg>0){ $(obj).attr('title','已支持');     $(obj).html('已支持<span>('+text+')</span>');   }
            else{ $(obj).attr('title','已反对');     $(obj).html('已反对<span>('+text+')</span>');    }  
        } 
        else{ alert("服务器繁忙，请稍后再试！");}
    }, "text"); 
} 
var sum_topNum=topNum;
function LoadNewClist(){
    sum_topNum=sum_topNum+topNum; 
    $.get(p_default_root_url+"ajax/service_handle.aspx", "Module=ARTICLECOMMENTLOADNEWCLIST&topNum=" + sum_topNum+"&articleId="+articleId, function (html) {  
        if(html==1){   $("#morComment").html("<a>亲,没有更多评论了~~</a>");  topNum=0;sum_topNum=0;  return; } 
        $("#c_list").html(html);
    }, "text");  
}


$(document).ready(function(){
	$(".new958Tips .zf").hover( function(){$(this).find(".zfFloat").show();$(this).css({"height":"75px"});}, 
	                            function(){$(this).find(".zfFloat").hide();$(this).css({"height":"34px"});})
	});


function doZanKen(f,obj){
    $.get(p_default_root_url+"ajax/service_handle.aspx", "Module=ARTICLECOMMENTDOZANKEN&articleId=" + articleId+"&falg="+f, function (text) {   
        if(text>0){      
            $(obj).attr('onclick','');    $(obj).removeAttr('href');   
            if(f>0){ $(obj).attr('title','已赞了，谢谢！');  $(obj).html('赞 <span>( '+text+' )</span>');}
            else{ $(obj).attr('title','已坑，小编会更努力的！！'); $(obj).html('坑 <span>( '+text+' )</span>');}  
        } 
        else{ alert("服务器繁忙，请稍后再试！");}
    }, "text"); 
}
 