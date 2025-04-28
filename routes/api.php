<?php
// use App\Http\Controllers\product_sold;
use App\Http\Controllers\product_sold;

Route::get('/product_stocks', [product_sold::class, 'index']);
Route::post('/post_product', [product_sold::class, 'create']);
Route::post('/AddProduct', [product_sold::class, 'create_product']);
Route::delete('/delete_product/{title}', [product_sold::class, 'destroy']);
Route::post('/addReview', [product_sold::class, 'cliendReview']);
Route::put('/update_product/{id}', [product_sold::class, 'update']);
Route::post('/update_stock', [product_sold::class, 'updateStockAfterSale']);




Route::get('/test', function () {
    return response()->json(['message' => 'API is working!']);
});