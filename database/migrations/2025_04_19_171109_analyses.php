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
        Schema::create('analyses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('technicien_labo_id')->constrained('technicien_labos');
            $table->foreignId('patient_id')->constrained('patients');
            $table->date('analyse_date');
            $table->string('analyse_heure');
            $table->string('type');
            $table->string('resultat');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('analyses');
    }
};
