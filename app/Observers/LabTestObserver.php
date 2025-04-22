<?php

namespace App\Observers;

use App\Models\Analyse;
use App\Helpers\FactureHelper;

class LabTestObserver
{
    /**
     * Handle the Analyse "created" event.
     */
    public function created(Analyse $analyse): void
    {
        FactureHelper::generateFacture($analyse);
    }

    /**
     * Handle the Analyse "updated" event.
     */
    public function updated(Analyse $analyse): void
    {
        //
    }

    /**
     * Handle the Analyse "deleted" event.
     */
    public function deleted(Analyse $analyse): void
    {
        //
    }

    /**
     * Handle the Analyse "restored" event.
     */
    public function restored(Analyse $analyse): void
    {
        //
    }

    /**
     * Handle the Analyse "force deleted" event.
     */
    public function forceDeleted(Analyse $analyse): void
    {
        //
    }
}
