<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',  // or other fields like 'total_amount'
        'total_amount',
    ];

    // Define relationships if needed
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}
