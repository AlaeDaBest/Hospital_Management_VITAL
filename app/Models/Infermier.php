<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Compte;
class Infermier extends Model
{
    use HasFactory;
    public function compte ()
    {
        return $this->morphOne(Compte::class,'roleable');
    }

}
