<?php

namespace App\Models;
use App\Models\Patient;
use App\Models\Technicien_labo;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Analyse extends Model
{
    use HasFactory;
    public function patient ()
    {
        return $this->belongsTo(Patient::class);
    }
    public function technicien_labo ()
    {
        return $this->belongsTo(Technicien_labo::class);
    }
}
