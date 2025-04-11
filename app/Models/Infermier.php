<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Infermier extends Model
{
    use HasFactory;
    protected $fillable = [ 'Nom','Prenom','Date_Naissance','Date_Recrutement','Email','Tel','Adresse','DepartementID','Specialite'];
    public function comptes ()
    {
        return $this->HasOne(Compte::class);
    }
    
}
