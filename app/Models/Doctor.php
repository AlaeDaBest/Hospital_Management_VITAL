<?php

namespace App\Models;
use App\Models\Compte;
use App\Models\Rendez_vous;
use App\Models\Chirurgie;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Doctor extends Model
{
    use HasFactory;
    
    public function compte ()
    {
        return $this->morphOne(Compte::class,'roleable');
    }
    public function rendez_vous ()
    {
        return $this->HasMany(Rendez_vous::class);
    }
    public function chirurgies ()
    {
        return $this->HasMany(Chirurgie::class);
    }
}
