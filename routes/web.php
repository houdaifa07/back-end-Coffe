<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\PurchaseController;


Route::get('/', function () {
    return 'from view :  welcome ';
});

















// Route::get('/controller/{id}' , [PurchaseController::class, 'store']);

// Route::get('/{name}/{lastname}', function (Request $request) {
//     return view('welcome', [
//         'name'=>$request ->name,
//         'lastname'=>$request ->lastname,
//     ]);
// });