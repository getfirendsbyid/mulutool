<?php


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

    function imgurl(){
        return com('dbs/zdy');  //图片地址
    }

    function deletespace($url)
    {
        return str_replace(array("\r\n", "\r", "\n" ,"\t"), "", $url);
    }

    function com($path){
        $keydata = \Illuminate\Support\Facades\Storage::allFiles($path);
        $whitchfile = $keydata[rand(0,count($keydata)-1)];
        $keyfile = file($whitchfile);
        foreach ($keyfile as $key=>$item){
            $keyword[$key] = $item;
        }
        $count = count($keyword);
        dd($keyword);
        return deletespace($keyword[rand(1,$count-1)]);
    }
