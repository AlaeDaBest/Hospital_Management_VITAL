<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Résultat d'Analyse</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 13px;
            margin: 40px;
            background-color: #f9f9f9;
            color: #333;
        }

        .section {
            background: #fff;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 25px;
            box-shadow: 0 0 10px rgba(0,0,0,0.05);
        }

        .titre {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #bf9345;
        }

        p {
            margin: 5px 0;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            border: 1px solid #ccc;
        }

        th, td {
            border: 1px solid #ccc;
            padding: 10px 8px;
            text-align: center;
            font-size: 12px;
        }

        th {
            background-color: #f0f0f0;
            color: #222;
        }

        textarea {
            width: 100%;
            height: 120px;
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 6px;
            resize: none;
            font-size: 13px;
            background-color: #fefefe;
            box-shadow: inset 0 0 4px rgba(0,0,0,0.05);
        }

        .inter {
            margin-top: 30px;
        }
    </style>
</head>
<body>

    <div class="section">
        <div class="titre">Informations du technicien</div>
        <p><strong>Nom :</strong> {{ $technicien->nom }} {{ $technicien->prenom }}</p>
        <p><strong>PatientID :</strong> {{ $patient_id }}</p>
        <p><strong>Test ID :</strong> {{ $test_id }}</p>
    </div>

    <div class="section">
        <div class="titre">Informations supplémentaires</div>
        <p><strong>Date :</strong> {{ $date }}</p>
        <p><strong>Service :</strong> {{ $service }}</p>
        <p><strong>Type de prélèvement :</strong> {{ $type_prelevement }}</p>
    </div>

    <div class="section">
        <div class="titre">Tableau des paramètres</div>
        <table>
            <thead>
                <tr>
                    <th>Prélèvement</th>
                    <th>Paramètre</th>
                    <th>Val. trouvée</th>
                    <th>Val. référence</th>
                    <th>Unité</th>
                    <th>Observation</th>
                </tr>
            </thead>
            <tbody>
                @foreach($lignes as $ligne)
                    <tr>
                        <td>{{ $ligne['prelevement'] }}</td>
                        <td>{{ $ligne['parametre'] }}</td>
                        <td>{{ $ligne['val_trouvee'] }}</td>
                        <td>{{ $ligne['val_reference'] }}</td>
                        <td>{{ $ligne['unite'] }}</td>
                        <td>{{ $ligne['observation'] }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    <div class="section inter">
        <div class="titre">Interprétation</div>
        <textarea readonly>{{ $interpretation }}</textarea>
    </div>

</body>
</html>
