<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class stocks extends Model
{
    protected $fillable = [
        'image_src',
        'title',
        'price',
        'quantity'
    ];

}
