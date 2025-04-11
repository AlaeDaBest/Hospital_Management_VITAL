<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lit extends Model
{
    use HasFactory;
    protected $fillable = [ 'chambreID','disponibilite'];
    public function chambres ()
    {
        return $this->BelongsTo(Chambre::class);
    }
   
}
