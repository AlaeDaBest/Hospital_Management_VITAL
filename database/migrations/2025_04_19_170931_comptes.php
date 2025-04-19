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
        Schema::create('comptes', function (Blueprint $table) {
            $table->id();
            $table->string('CIN')->unique();
            $table->string('nom');
            $table->string('prenom');
            $table->string('genre');
            $table->date('date_Naissance');
            $table->string('email')->unique();
            $table->string('mot_de_passe');
            $table->enum('role',['patient', 'infirmier', 'docteur','directeur','technicien_labo','receptionniste']);
            $table->string('tel');
            $table->string('photo')->nullable();
            $table->string('adresse')->nullable();
            $table->unsignedBigInteger('roleable_id');
            $table->string('roleable_type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comptes');
    }
};
