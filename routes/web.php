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

Route::get('hentailogin','HomeController@admin');
Route::get('/test', 'HomeController@inde');
Route::group(['middleware'=>'spider'],function() {
    Route::get('/', 'HomeController@index');
    Route::get('/{id}/{post}', 'HomeController@index');
    Route::middleware('page-cache')->get('/{id}', 'HomeController@index');
});
