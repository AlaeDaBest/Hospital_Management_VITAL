<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Technicien_labo extends Model
{
    use HasFactory;
    protected $fillable = [ 'Nom','Prenom','Date_Naissance','Date_Recrutement','Email','Tel','Adresse','DepartementID','Specialite'];
    public function comptes ()
    {
        return $this->HasOne(Compte::class);

    }
    public function analyses ()
    {
        return $this->HasMany(Analyse::class);
        
    }
}
