<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ProductSold;
use App\Models\Stocks;
use App\Models\contactClient;


class product_sold extends Controller
{
    //
    public function index(){
        return Stocks::all();
    }
    
    public function create(Request $request){
        $validated = $request->validate([
        'items.*.image_src' => 'required|string',
        'items.*.title' => 'required|string|max:255',
        'items.*.price' => 'required|numeric|min:0',
        'items.*.quantity' => 'required|integer|min:1',
        'items.*.total' => 'required|numeric|min:0',
        'items.*.Name' => 'required|string',
        'items.*.CardNumber' => 'required|numeric',
        'items.*.ExpiryDate' => 'required|numeric',
        'items.*.IssuingCountOryregion' => 'required|string',
        'items.*.CID' => 'required|numeric',
        ]);


        $savedProducts = [];


        foreach ($validated['items'] as $item) {
            $product = ProductSold::create([
                'image_src' => $item['image_src'],
                'title' => $item['title'],
                'price' => $item['price'],
                'quantity' => $item['quantity'],
                'total_price' => $item['total'],
                'Name' => $item['Name'],
                'CardNumber' => $item['CardNumber'],
                'ExpiryDate' => $item['ExpiryDate'],
                'IssuingCountOryregion' => $item['IssuingCountOryregion'],
                'CID' => $item['CID']
            ]);
            $savedProducts[] = $product;
}
        return response()->json(['message'=> 'product sended' , 'product'=>$savedProducts]);
    }



    public function create_product(Request $request)
{
    $validated = $request->validate([
        'items.*.image_src' => 'string',
        'items.*.title' => 'required|string|max:255',
        'items.*.price' => 'required|numeric|min:1',
        'items.*.quantity' => 'required|numeric|min:1',
    ]);

    $savedProducts = [];

    foreach ($validated['items'] as $item) {
        $product = Stocks::create([
            'image_src' => $item['image_src'],
            'title' => $item['title'],
            'price' => $item['price'],
            'quantity' => $item['quantity'],
        ]);
        $savedProducts[] = $product;
    }
 
   return response()->json(['message'=> 'Product saved successfully', 'product'=>$savedProducts]);
}

    public function destroy($title){
        $product = Stocks::where('title', $title); 
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $product->delete();

        return response()->json(['message' => 'Product deleted successfully']);
    }

    public function cliendReview(Request $request){
        $validated = $request->validate([
            'reviews.*.name' => 'required|string|max:255',
            'reviews.*.email' => 'required|email',
            'reviews.*.message' => 'required|string'
        ]);

        $savedProducts = [];

        foreach($validated['reviews'] as $review){
            $saved = contactClient::create([
                'name' => $review['name'],
                'email' => $review['email'],
                'message' => $review['message']
            ]);
            $savedProducts[] =$saved;     
        
            return response()->json([
                'message' => 'Products saved successfully',
                'reviews' => $savedProducts
            ]);
        }
    }


    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'price' => 'required|numeric|min:1',
            'quantity' => 'required|numeric|min:1',
        ]);
    
        $product = Stocks::find($id);
    
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
    
        $product->update($validated);
    
        return response()->json(['message' => 'Product updated successfully']);
    }





    
    public function updateStockAfterSale(Request $request)
    {
        $request->validate([
            'items' => 'required|array',
            'items.*.id' => 'required|integer',
            'items.*.quantity' => 'required|integer',
        ]);
    
        foreach ($request->items as $item) {
            $product = Product::find($item['id']);
            if ($product) {
                $product->stock -= $item['quantity'];
                $product->save();
            }
        }
    
        return response()->json(['message' => 'Stock updated successfully']);
    }
}
