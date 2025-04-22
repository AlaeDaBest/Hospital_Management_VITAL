<?php

namespace App\Models;
use App\Models\Patient;
use App\Models\Technicien_labo;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Analyse extends Model
{  
    protected $fillable = [
        'type',
        'status',
        'patient_id',
        'technicien_labo_id',
        'date_analyse', // si tu as un champ de date
        'resultat',     // si tu stockes les résultats dans la table
    ];
    use HasFactory;
    public function patient ()
    {
        return $this->belongsTo(Patient::class,'patientID');
    }
    public function technicien_labo ()
    {
        return $this->belongsTo(Technicien_labo::class,'technicien_laboID');
    }
}    

