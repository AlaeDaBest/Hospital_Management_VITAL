<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;




class Payment extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'facture_id',
        'method',
        'card_number',
        'expiration',
        'cvv'
    ];
    
    public function facture()
    {
        return $this->belongsTo(Facture::class);
    }
}
