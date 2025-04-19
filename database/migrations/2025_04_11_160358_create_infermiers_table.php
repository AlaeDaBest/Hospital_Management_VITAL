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
        Schema::create('infermiers', function (Blueprint $table) {
            $table->id();
            $table->date('date_Recrutement');
            $table->string('specialite');
<<<<<<< HEAD
            $table->foreignId('departementID')->constrained('departements');

            // $table->foreignId('user_id')->constrained('*');

=======
            $table->foreignId('departement_id')->constrained('departements');
>>>>>>> 0cb89ea070af09fbefd4d81c3b024f9a62f06cb0
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('infermiers');
    }
};
