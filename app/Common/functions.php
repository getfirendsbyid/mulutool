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

    function 时间(){    //年-月-日
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

    function 当前时间(){     //年-月-日 小时:分:秒
        return date('Y-m-d H:i:s');
    }

    function 随机时间(){        //获取三天内的随机时间,年-月-日 小时:分:秒
        $begintime = date('Y-m-d H:i:s' , strtotime("-3 day"));
        $begin = strtotime($begintime);
        $end = strtotime(date('Y-m-d H:i:s'));
        $timestamp = rand($begin, $end);
        return date("Y-m-d H:i:s", $timestamp);

    }

    function 过去时间($time){     //传入的参数：整数，代表想获取多少天前的时间,年-月-日 小时:分:秒
        return date('Y-m-d H:i:s' , strtotime("-".$time." day"));

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

        return deletespace($keyword[$num]);
    }



    function fixed($path){
        $keydata = \Illuminate\Support\Facades\Storage::allFiles($path);
        $whitchfile = $keydata[0];
        $keyfile = file($whitchfile);

        return deletespace($keyfile[0]);
    }


/**
 * @param $name   指定名字查询蜘蛛数量 Baidu=百度蜘蛛
 *                                  Sogou=搜狗蜘蛛
 *                                  360Spider=360蜘蛛
 *                                  神马=神马蜘蛛
 *                若只想查看蜘蛛的总数量，随意传入参数即可，但是必须要有参数
 * @return array  0为指定蜘蛛的总数量,1为当前小时指定蜘蛛的总数量，2为所有蜘蛛总数量，3为当前小时所有蜘蛛总数量
 */
    function spider($name){
        $file = @fopen(date('Y-m-d').'.txt','a+');//读取当天蜘蛛文件，若文件不存在则会自动创建一个
        $num = array(0,0,0,0);
        while(!feof($file))
        {
            $line = fgets($file);
            $voo = strpos($line,$name);//判断当前行的记录是否为指定蜘蛛
//           dd($voo);
            if($voo){
                $num[0]++;//指定蜘蛛总数量加一
                $is = strpos($line,date('Y-m-d H'));//判断当前的记录是否是当前小时的记录
                if ($is){
                    $num[1]++;//当前小时指定猪猪数量加一
                }
            }
            $num[2]++;//所有蜘蛛总数量加一
            $is = strpos($line,date('Y-m-d H'));//判断当前的记录是否是当前小时的记录
            if ($is){
                $num[3]++;//当前小时猪猪总数量加一
            }
        }
        fclose($file);//关闭文件
        return $num;
    }






