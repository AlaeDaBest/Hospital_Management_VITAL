<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Facture</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 14px;
            color: #333;
            margin: 40px;
            background-color: #fff;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
        }

        .header img {
            width: 100px;
            height: auto;
            margin-bottom: 10px;
        }

        .title {
            font-size: 24px;
            font-weight: bold;
            color: #244A6A; /* Bootstrap green */
        }

        .section {
            margin-bottom: 25px;
            border-left: 4px solid #22CBC2;
            padding-left: 12px;
            background: #eef6fc;
            padding: 12px;
            border-radius: 6px;
        }

        .section h4 {
            margin: 0;
            font-size: 16px;
            color: #22CBC2;
        }

        .section p {
            margin: 4px 0 0 0;
        }

        .label {
            font-weight: bold;
            color: #244A6A;
        }

        .footer {
            text-align: center;
            margin-top: 50px;
            font-size: 12px;
            color: #22CBC2;
        }

        .facture-box {
            border: 1px solid #244A6A;
            padding: 30px;
            border-radius: 10px;
            background: #ffffff;
        }
    </style>
</head>
<body>
    <div class="header">
        <img src="{{ public_path('Images/Home/Logo.png') }}" alt="Logo de l'hôpital">
        <div class="title">Facture #{{ $facture->id ?? 'Alae' }}</div>
    </div>

    <div class="facture-box">
        <div class="section">
            <h4>Informations du patient</h4>
            <p><span class="label">ID Patient :</span> {{ $facture->patient_id ?? 'Alae' }}</p>
        </div>

        <div class="section">
            <h4>Détails de la facture</h4>
            <p><span class="label">Montant total :</span> {{ $facture->montant_total ?? 'Alae' }} DH</p>
            <p><span class="label">Statut :</span> {{ $facture->statut ?? 'Alae' }}</p>
            <p><span class="label">Date d’émission :</span> {{ $facture->date_emission ?? 'Alae' }}</p>
            <p><span class="label">Date de paiement :</span> {{ $facture->date_paiement ?? 'Alae' }}</p>
            <p><span class="label">Description :</span> {{ $facture->description ?? 'Alae' }}</p>
        </div>
    </div>

    <div class="footer">
        Merci de votre confiance. Pour toute question, contactez notre administration.
    </div>
</body>
</html>
