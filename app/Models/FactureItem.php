<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Facture;

class FactureItem extends Model
{
    use HasFactory;
    public function facture()
    {
        return $this->belongsTo(Facture::class);
    }

    public function itemable()
    {
        return $this->morphTo();
    }
}
