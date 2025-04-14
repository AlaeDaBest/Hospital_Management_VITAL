<?php

namespace App\Models;
use App\Models\Compte;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receptionniste extends Model
{
    use HasFactory;
    public function compte ()
    {
        return $this->HasOne(Compte::class);
    }
 
}
