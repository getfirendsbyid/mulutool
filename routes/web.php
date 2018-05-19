<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/test', 'test@test');
Route::group(['middleware'=>'spider'],function() {
    Route::get('/{id}', 'HomeController@index');
    Route::get('/muluurl', 'HomeController@create_mulu_url');



    Route::middleware('page-cache')->get('/{id}', 'HomeController@index');
});