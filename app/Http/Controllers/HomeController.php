<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    public function index()
    {
        return view('templete.index');
    }

    public static function keyword()
    {
        $keydata = Storage::allFiles('dbs/key');
        $whitchfile = $keydata[rand(0,count($keydata)-1)];
        $keyfile = file($whitchfile);

        foreach ($keyfile as $key=>$item){
            $keyword[$key] = $item;
        }

        return $keyword;
    }


}
