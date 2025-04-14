<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Technicien_labo extends Model
{
    use HasFactory;
    public function comptes ()
    {
        return $this->HasOne(Compte::class);

    }
    public function analyses ()
    {
        return $this->HasMany(Analyse::class);
        
    }
}
