<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chambre extends Model
{
    use HasFactory;
    protected $fillable = [ 'nombre_lit','departementID'];
    public function departements ()
    {
        return $this->BelongsTo(Departement::class);
    }
    public function lits ()
    {
        return $this->HasMany(Lit::class);
    }
   
}
