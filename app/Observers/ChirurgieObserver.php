<?php

namespace App\Observers;

use App\Models\Chirurgie;
use App\Helpers\FactureHelper;

class ChirurgieObserver
{
    /**
     * Handle the Chirurgie "created" event.
     */
    public function created(Chirurgie $chirurgie): void
    {
        if($rendez_vous->statut == 'complété') {
            FactureHelper::generateFacture($rendez_vous);
        }
    }

    /**
     * Handle the Chirurgie "updated" event.
     */
    public function updated(Chirurgie $chirurgie): void
    {
        if ($chirurgie->wasChanged('statut') && $chirurgie->statut==='complété') {
            FactureHelper::generateFactureItem($chirurgie);
        }
    }

    /**
     * Handle the Chirurgie "deleted" event.
     */
    public function deleted(Chirurgie $chirurgie): void
    {
        //
    }

    /**
     * Handle the Chirurgie "restored" event.
     */
    public function restored(Chirurgie $chirurgie): void
    {
        //
    }

    /**
     * Handle the Chirurgie "force deleted" event.
     */
    public function forceDeleted(Chirurgie $chirurgie): void
    {
        //
    }
}
