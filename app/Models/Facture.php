<?php

namespace App\Models;
use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facture extends Model
{
    use HasFactory;
    public function patient ()
    {
        return $this->belongsTo(Patient::class);
    }
}
