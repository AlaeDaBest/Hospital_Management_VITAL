<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Departement extends Model
{
    use HasFactory;
    protected $fillable = [ 'nom'];
    public function doctors ()
    {
        return $this->HasMany(Doctor::class);
    }
    public function infermiers ()
    {
        return $this->HasMany(Infermier::class);
    }
    public function chambres ()
    {
        return $this->HasMany(Chambre::class);
    }
    
}
