<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class test extends Controller
{

    function test()
    {
        echo 1;
        $c = curl_init();
        curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);
//curl_setopt($c, CURLOPT_HEADER, 1);//输出远程服务器的header信息
        curl_setopt($c, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727;http://www.baidu.com)');
        curl_setopt($c, CURLOPT_URL, "localhost:8000");
        $contents = curl_exec($c);
        curl_close($c);
        if ($contents) {return $contents;}
        else {return FALSE;}
    }
}
