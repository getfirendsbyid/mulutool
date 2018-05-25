<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{env('APP_NAME')}}</title>
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="{{url('class/css/font.css')}}">
    <link rel="stylesheet" href="{{url('class/css/xadmin.css')}}">
    <script type="text/javascript" src="{{url('class/js/jquery.min.js')}}"></script>
    <script src="{{url('class/lib/layui/layui.js')}}" charset="utf-8"></script>
    <script type="text/javascript" src="{{url('class/js/xadmin.js')}}"></script>
    <link rel="stylesheet" href="{{url('class/lib/layui/css/layui.css')}}"  media="all">
</head>
<body>
<script>
    layui.use('element', function(){
        var element = layui.element;

        //一些事件监听
        element.on('tab(demo)', function(data){
            console.log(data);
        });
    });
</script>
<div class="layui-tab layui-tab-card">
    <ul class="layui-tab-title">1
        <li class="layui-this">全部蜘蛛[{{spider('Baidu')[2]}}]</li>
        <li>百度蜘蛛[{{spider('Baidu')[0]}}]</li>
        <li>360蜘蛛[{{spider('360Spider')[0]}}]</li>
        <li>搜狗蜘蛛[{{spider('Sogou')[0]}}]</li>
        <li>神马蜘蛛[{{spider('神马')[0]}}]</li>
    </ul>
    <div class="layui-tab-content" style="height: 100px;">
        <div class="layui-tab-item layui-show">当前小时蜘蛛总量:{{spider('Baidu')[3]}}</div>
        <div class="layui-tab-item">当前小时百度蜘蛛量:{{spider('Baidu')[1]}}</div>
        <div class="layui-tab-item">当前小时360蜘蛛量:{{spider('360Spider')[1]}}</div>
        <div class="layui-tab-item">当前小时搜狗蜘蛛量:{{spider('Sogou')[1]}}</div>
        <div class="layui-tab-item">当前小时神马蜘蛛量:{{spider('神马')[1]}}</div>
    </div>
</div>
</body>
</html>