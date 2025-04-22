<?php

namespace App\Models;
use App\Models\Patient;
use App\Models\Doctor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\FactureItem;

class Rendez_vous extends Model
{
    use HasFactory;
    public function patient ()
    {
        return $this->belongsTo(Patient::class);
    }
    public function doctor ()
    {
        return $this->belongsTo(Doctor::class);
    }
    public function factureItems()
    {
        return $this->morphMany(FactureItem::class, 'itemable');
    }
}
