<?php

namespace App\Models;
use App\Models\Chambre;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lit extends Model
{
    use HasFactory;
    public function chambre ()
    {
        return $this->BelongsTo(Chambre::class);
    }
   
}
