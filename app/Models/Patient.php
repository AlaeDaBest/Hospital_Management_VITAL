<?php

namespace App\Models;
use App\Models\Compte;
use App\Models\Rendez_vous;
use App\Models\Chirurgie;
use App\Models\Facture;
use App\Models\Analyse;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;
    public function compte ()
    {
        return $this->morphOne(Compte::class,'roleable');
    }
    public function rendezVous () // laravel bzez 3liya nrodo hakda bx tkon relation
    {
        return $this->HasMany(Rendez_vous::class);
    }
    public function chirurgies ()
    {
        return $this->HasMany(Chirurgie::class);
    }
    public function analyses ()
    {
        return $this->HasMany(Analyse::class);
    }
    public function factures ()
    {
        return $this->HasMany(Facture::class);
    }
}
