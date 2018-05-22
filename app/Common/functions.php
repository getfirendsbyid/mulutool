<?php

    $url = 'd.958shop.com/bbk';

    function keyword()
    {
        return com('dbs/key');
    }

    function title(){
        return com('dbs/bt');
    }

    function body(){
        return com('dbs/txt');
    }

    function diy(){
        return com('dbs/zdy');
    }

    function random_url(){
       return  com('dbs/url');
    }

    function 图片地址($muluurl){
        return $muluurl.'/'.com('dbs/imgurl');  //图片地址
    }

    function 时间(){
      return  date('Y-m-d');
    }

    function deletespace($url)
    {

        return str_replace(array("\r\n", "\r", "\n" ,"\t"), "", $url);
    }

    function 随机数字($num){    //随机拿取100到传入最大数
        return rand(100,$num);
    }

    function 文章标题(){
        return com('dbs/head');
    }

    function 固定标题(){       //固定标题调用的句子将与当前页面的title相同，使用此标签前提要使用过title标签
        return fixed('dbs/fixed');
    }

    function 正常标题(){       //非菠菜标题
        return com('dbs/zcbt');
    }

    function des(){      //description
        return com('dbs/des');
    }

    function 固定key(){      //与当前页面的KEY相同，使用此标签前提要使用过keyword标签
        return fixed('dbs/gdkey');
    }

    function 网站名称(){
        return com('dbs/name');
    }

    function com($path){

        $keydata = \Illuminate\Support\Facades\Storage::allFiles($path);
        $whitchfile = $keydata[rand(0,count($keydata)-1)];
        $keyfile = file($whitchfile);
        foreach ($keyfile as $key=>$item){
            $keyword[$key] = $item;
        }
        $count = count($keyword);
        $num = rand(0,$count-1);
        if(strcmp($path,'dbs/bt')==0){
            $zcbt=@fopen('dbs/fixed/sen.txt','w');
            fwrite($zcbt,$keyword[$num]);
            fclose($zcbt);
        }elseif (strcmp($path,'dbs/key')==0){
            $gdkey=@fopen('dbs/gdkey/key.txt','w');
            fwrite($gdkey,$keyword[$num]);
            fclose($gdkey);
        }
        return $keyword[$num];
    }

    function fixed($path){
        $keydata = \Illuminate\Support\Facades\Storage::allFiles($path);
        $whitchfile = $keydata[0];
        $keyfile = file($whitchfile);
        return $keyfile[0];
    }




