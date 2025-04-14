<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;
    
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
        return $this->BelongsToMany(Chirurgie::class);
    }
}
