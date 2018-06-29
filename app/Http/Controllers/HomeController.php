<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    public function index($id,$tid='')
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

    public function inde(){
        return view('templete.text');
    }

    public function deletespace($url)
    {
        return  str_replace(array("\r\n", "\r", "\n" ,"\t"), "", $url);
    }

    public function admin(Request $request)
    {
       $username = $request->input('username');
       $password = $request->input('password');
       if (empty($username)&&empty($password)){
           return view('login');
       }
       if ($username == 'hentaiclub'&& $password == 'hentai123'){
           return view('home');
       }
    }
}
