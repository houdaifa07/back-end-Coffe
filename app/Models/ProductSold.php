<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSold extends Model
{
    protected $fillable = [
        'image_src',
        'title',
        'price',
        'quantity',
        'total_price',
        'Name',
        'CardNumber',
        'ExpiryDate',
        'IssuingCountOryregion',
        'CID'
    ];
}
