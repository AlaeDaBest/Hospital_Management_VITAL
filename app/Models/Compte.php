<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compte extends Model
{
    use HasFactory;
    public function patient ()
    {
        return $this->BelongsTo(Patient::class);
    }
    public function doctor  ()
    {
        return $this->BelongsTo(Doctor::class);
    }
    public function infermiers ()
    {
        return $this->BelongsTo(Infermier::class);
    }
    public function technicien_labos ()
    {
        return $this->BelongsTo(Technicien_labo::class);
    }
    public function receptionnistes ()
    {
        return $this->BelongsTo(Receptionniste::class);
    }
    public function directeurs ()
    {
        return $this->BelongsTo(Directeur::class);
    }
}
