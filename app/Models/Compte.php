<?php

namespace App\Models;
use App\Models\Patient;
use App\Models\Doctor;
use App\Models\Infermier;
use App\Models\Technicien_labo;
use App\Models\Receptionniste;
use App\Models\Directeur;
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
    public function infermier ()
    {
        return $this->BelongsTo(Infermier::class);
    }
    public function technicien_labo ()
    {
        return $this->BelongsTo(Technicien_labo::class);
    }
    public function receptionniste ()
    {
        return $this->BelongsTo(Receptionniste::class);
    }
    public function directeur ()
    {
        return $this->BelongsTo(Directeur::class);
    }
}
