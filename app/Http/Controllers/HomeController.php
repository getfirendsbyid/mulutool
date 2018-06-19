<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    public function index()
    {
        dd(random_url());
        return view('templete.index');
    }

    public function create_mulu_url()
    {
        $mulufile = fopen('dbs/url/url.txt','w');
        for ($i=0;$i<1000;$i++){
            $data[$i] =  $this->deletespace('http://d.958shop.com/bbk').date('Ymd').rand(1000,9999);
            fwrite($mulufile, $data[$i]."\r");
        }
    }


    public function deletespace($url)
    {
        return  str_replace(array("\r\n", "\r", "\n" ,"\t"), "", $url);
    }
    

}
