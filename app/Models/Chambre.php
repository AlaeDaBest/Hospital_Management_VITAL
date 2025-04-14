<?php

namespace App\Models;
use App\Models\Departement;
use App\Models\Lit;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Chambre extends Model
{
    use HasFactory;
    public function departement()
    {
        return $this->BelongsTo(Departement::class);
    }
    public function lits ()
    {
        return $this->HasMany(Lit::class);
    }
   
}
