<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    public function index()
    {
        return view('templete.class');
    }

    public function create_mulu_url()
    {
        $mulufile = fopen('dbs/url/url.txt','w');
        for ($i=0;$i<1000;$i++){
           echo  $data[$i] =  $this->deletespace('http://d.958shop.com/bbk').date('Ymd').rand(1000,9999);
          echo '<br>';
        }
    }


    public function deletespace($url)
    {
        return  str_replace(array("\r\n", "\r", "\n" ,"\t"), "", $url);
    }
    

}
