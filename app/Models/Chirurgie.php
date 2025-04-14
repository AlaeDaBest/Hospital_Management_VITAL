<?php

namespace App\Models;
use App\Models\Patient;
use App\Models\Doctor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chirurgie extends Model
{
    use HasFactory;
    public function patient ()
    {
        return $this->belongsTo(Patient::class);
    }
    public function doctors ()
    {
        return $this->belongsToMany(Doctor::class);
    }
}
