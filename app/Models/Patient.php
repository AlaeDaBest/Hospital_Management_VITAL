<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;
    protected $fillable = ['patientID', 'cin', 'Nom','Prenom','Genre','Date_Naissance','Email','Tel','Adresse','GroupeSanguin','Allergie','Conditions_Medicaux'];
    public function comptes ()
    {
        return $this->HasOne(Compte::class);
    }
    public function rendez_vous ()
    {
        return $this->HasMany(Rendez_vous::class);
    }
    public function chirurgies ()
    {
        return $this->HasMany(Chirurgie::class);
    }
    public function laboTests ()
    {
        return $this->HasMany(LaboTest::class);
    }
    public function factures ()
    {
        return $this->HasMany(Facture::class);
    }
}
