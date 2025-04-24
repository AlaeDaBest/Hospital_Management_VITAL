<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Facture</title>
    <style>
        body { font-family: sans-serif; }
        .header { text-align: center; font-size: 20px; margin-bottom: 20px; }
        .section { margin-bottom: 15px; }
    </style>
</head>
<body>
    <div>
        <img src="{{ asset('Images/Home/Logo.png') }}" alt="Logo" style="width: 100px; height: auto;">
    </div>
    <div class="header">Facture #{{ $facture->id?? 'Alae' }}</div>
    <div class="section">Patient ID: {{ $facture->patient_id?? 'Alae' }}</div>
    <div class="section">Montant total: {{ $facture->montant_total?? 'Alae' }} DH</div>
    <div class="section">Statut: {{ $facture->statut?? 'Alae' }}</div>
    <div class="section">Date d'émission: {{ $facture->date_emission?? 'Alae' }}</div>
    <div class="section">Date de paiement: {{ $facture->date_paiement?? 'Alae' }}</div>
    <div class="section">Description: {{ $facture->description?? 'Alae' }}</div>
</body>
</html>
