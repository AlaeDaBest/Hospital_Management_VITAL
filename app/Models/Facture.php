<?php

namespace App\Models;
use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Compte;
use App\Models\FactureItem;

class Facture extends Model
{
    use HasFactory;
    public function patient ()
    {
        return $this->belongsTo(Patient::class);
    }
    public function compte()
    {
        return $this->belongsTo(Compte::class);
    }

    public function items()
    {
        return $this->hasMany(FactureItem::class);
    }
}
