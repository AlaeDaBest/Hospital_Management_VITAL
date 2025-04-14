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
        Schema::create('chirurgies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('doctorID')->constrained('doctors');
            $table->foreignId('patientID')->constrained('patients');
            $table->date('chirurgie_date');
            $table->date('chirurgie_heure');
            $table->string('type');
            $table->string('statut');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chirurgies');
    }
};
