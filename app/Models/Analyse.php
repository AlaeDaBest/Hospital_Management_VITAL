<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Analyse extends Model
{
    use HasFactory;
    public function patient ()
    {
        return $this->belongsTo(Patient::class);
    }
    public function techenicien_labo ()
    {
        return $this->belongsTo(Techenicien_labo::class);
    }
}
