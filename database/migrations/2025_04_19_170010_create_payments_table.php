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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('facture_id');
            $table->string('method'); // 'carte', 'mobile', 'virement'
            $table->string('card_number')->nullable();
            $table->string('expiration')->nullable();
            $table->string('cvv')->nullable();
            $table->timestamps();
    
            $table->foreign('facture_id')->references('id')->on('factures')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
