<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receptionniste extends Model
{
    use HasFactory;
    public function comptes ()
    {
        return $this->HasOne(Compte::class);
    }
 
}
