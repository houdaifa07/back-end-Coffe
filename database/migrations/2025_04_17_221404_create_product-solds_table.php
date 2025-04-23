<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_solds', function (Blueprint $table) {
            $table->id();
            $table->string('image_src')->nullable();
            $table->string('title');
            $table->decimal('price', 10, 2);
            $table->integer('quantity');
            $table->decimal('total_price', 10, 2);
            $table->string('Name');
            $table->string('CardNumber');
            $table->string('ExpiryDate'); 
            $table->string('IssuingCountOryregion');
            $table->string('CID'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_solds');
    }
};
