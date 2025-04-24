<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Toutes les analyses</title>
    <style>
        body { font-family: DejaVu Sans, sans-serif; font-size: 12px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #444; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        h2 { text-align: center; margin-top: 20px; }
    </style>
</head>
<body>
    <h2>Rapport de toutes les analyses médicales</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Technicien</th>
                <th>Type</th>
                <th>Date</th>
                <th>Résultat</th>
            </tr>
        </thead>
        <tbody>
            @foreach($analyses as $analyse)
                <tr>
                    <td>{{ $analyse->id }}</td>
                    <td>{{ $analyse->technicien_labo->prenom ?? 'Inconnu' }} {{ $analyse->technicien_labo->nom ?? '' }}</td>
                    <td>{{ $analyse->type }}</td>
                    <td>{{ $analyse->analyse_date }}</td>
                    <td>{{ $analyse->resultat }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
