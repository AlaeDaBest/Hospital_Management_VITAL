<?php

namespace App\Models;
use App\Models\Compte;
use App\Models\Analyse;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Technicien_labo extends Model
{
    use HasFactory;
    public function compte ()
    {
        return $this->morphOne(Compte::class,'roleable');
    }
    public function analyses ()
    {
        return $this->HasMany(Analyse::class);
        
    }
}
