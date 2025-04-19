<?php

namespace App\Models;
use App\Models\Compte;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Directeur extends Model
{
    use HasFactory;
    public function compte ()
    {
        return $this->morphOne(Compte::class,'roleable');
    }
}
