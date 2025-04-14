<?php

namespace App\Models;
use App\Models\Doctor;
use App\Models\Infermier;
use App\Models\Chambre;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Departement extends Model
{
    use HasFactory;

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
