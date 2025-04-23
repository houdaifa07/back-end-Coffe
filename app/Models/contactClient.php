<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class contactClient extends Model
{
    protected $fillable = [
        'name',
        'email',
        'message'
    ];
}
