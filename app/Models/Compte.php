<?php

namespace App\Models;
use App\Models\Patient;
use App\Models\Doctor;
use App\Models\Infermier;
use App\Models\Technicien_labo;
use App\Models\Receptionniste;
use App\Models\Directeur;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
// use Illuminate\Auth\Authenticatable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Compte extends Authenticatable
{
    use HasFactory;
    // use Authenticatable;
    protected $table = 'comptes';

    public function getAuthIdentifierName()
    {
        return 'id'; 
    }

    public function getAuthIdentifier()
    {
        return $this->getKey();
    }

    public function getAuthPassword()
    {
        return $this->password; 
    }

    public function getRememberToken()
    {
        return $this->remember_token;
    }

    public function setRememberToken($value)
    {
        $this->remember_token = $value;
    }

    public function getRememberTokenName()
    {
        return 'remember_token';
    }

    public function patient ()
    {
        return $this->BelongsTo(Patient::class);
    }
    public function doctor  ()
    {
        return $this->BelongsTo(Doctor::class);
    }
    public function infermier ()
    {
        return $this->BelongsTo(Infermier::class);
    }
    public function technicien_labo ()
    {
        return $this->BelongsTo(Technicien_labo::class);
    }
    public function receptionniste ()
    {
        return $this->BelongsTo(Receptionniste::class);
    }
    public function directeur ()
    {
        return $this->BelongsTo(Directeur::class);
    }
    public function roleable()
    {
        return $this->morphTo();
    }
}
