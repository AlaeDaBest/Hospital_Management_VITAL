<?php

namespace App\Observers;

use App\Models\Rendez_vous;
use App\Helpers\FactureHelper;

class RendezVousObserver
{
    /**
     * Handle the Rendez_vous "created" event.
     */
    public function created(Rendez_vous $rendez_vous): void
    {
        if($rendez_vous->statut == 'complété') {
            FactureHelper::generateFacture($rendez_vous);
        }
    }

    /**
     * Handle the Rendez_vous "updated" event.
     */
    public function updated(Rendez_vous $rendez_vous): void
    {
        if ($rendez_vous->wasChanged('statut') && $rendez_vous->statut==='complété') {
            FactureHelper::generateFactureItem($rendez_vous);
        }
    }

    /**
     * Handle the Rendez_vous "deleted" event.
     */
    public function deleted(Rendez_vous $rendez_vous): void
    {
        //
    }

    /**
     * Handle the Rendez_vous "restored" event.
     */
    public function restored(Rendez_vous $rendez_vous): void
    {
        //
    }

    /**
     * Handle the Rendez_vous "force deleted" event.
     */
    public function forceDeleted(Rendez_vous $rendez_vous): void
    {
        //
    }
}
