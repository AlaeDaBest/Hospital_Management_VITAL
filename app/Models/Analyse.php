<?php

namespace App\Models;
use App\Models\Patient;
use App\Models\Technicien_labo;
use App\Models\FactureItem;

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
    public function factureItems()
    {
        return $this->morphMany(FactureItem::class, 'itemable');
    }
    public function compte()
{
    return $this->belongsTo(Compte::class, 'patient_id'); // ou autre clé étrangère
}

}
