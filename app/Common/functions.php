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
        return url('').'/url'.str_random(15); //随机url
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
        var_dump($keydata);
//        $whitchfile = $keydata[rand(0,count($keydata)-1)];
//        $keyfile = file($whitchfile);
//        foreach ($keyfile as $key=>$item){
//            $keyword[$key] = $item;
//        }
//        $count = count($keyword);
//        return deletespace($keyword[rand(1,$count-1)]);
    }
