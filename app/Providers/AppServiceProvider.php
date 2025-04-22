<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Rendez_vous;
use App\Observers\RendezVousObserver;
use App\Observers\LabTestObserver;
use App\Models\Analyse;
use App\Models\Chirurgie;
use App\Observers\ChirurgieObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Rendez_vous::observe(RendezVousObserver::class);
        Analyse::observe(LabTestObserver::class);
        Chirurgie::observe(ChirurgieObserver::class);
    }
}
