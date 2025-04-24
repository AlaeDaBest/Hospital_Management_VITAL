<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Ordonnance Médicale</title>
  <style>
    body {
      font-family: 'DejaVu Sans', sans-serif;
      font-size: 14px;
      color: #333;
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%);
    }
    .background{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20px;
        background-color: #22cbc3;
        opacity: 0.1;
        z-index: -1;
    }

    .container {
      max-width: 800px;
      margin: 30px auto;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      position: relative;
      overflow: hidden;
    }

    .container::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 8px;
      background: linear-gradient(90deg, #22cbc3 0%, #3498db 100%);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      margin-bottom: 25px;
      border-bottom: 1px solid #e1e1e1;
      position: relative;
    }

    .clinic-name {
      font-size: 28px;
      font-weight: bold;
      color: #22cbc3;
      text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.8);
      position: relative;
    }

    .clinic-name::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 40px;
      height: 3px;
      background-color: #3498db;
    }

    .date-section {
      background-color: #f8f9fa;
      padding: 8px 15px;
      border-radius: 20px;
      font-size: 13px;
      color: #555;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }

    .ordonnance-title {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin: 30px 0 25px;
      text-transform: uppercase;
      color: #2c3e50;
      letter-spacing: 2px;
      position: relative;
    }

    .ordonnance-title::after {
      content: "";
      position: absolute;
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, #22cbc3 0%, #3498db 100%);
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }

    .section {
      margin-bottom: 30px;
      padding: 15px 20px;
      border-radius: 8px;
      background-color: #fcfcfc;
      box-shadow: 0 3px 10px rgba(0,0,0,0.03);
      transition: all 0.3s ease;
    }

    .section:hover {
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      transform: translateY(-2px);
    }

    .section h3 {
      margin-bottom: 15px;
      font-size: 18px;
      color: #22cbc3;
      padding-bottom: 8px;
      border-bottom: 1px dashed #e1e1e1;
      display: flex;
      align-items: center;
    }

    .section h3::before {
      content: "•";
      margin-right: 10px;
      color: #3498db;
      font-size: 22px;
    }

    .info-table {
      width: 100%;
      border-collapse: collapse;
    }

    .info-table td {
      padding: 10px;
      vertical-align: top;
    }

    .info-table td.label {
      font-weight: bold;
      color: #555;
      width: 30%;
      position: relative;
    }

    .info-table td.label::after {
      content: ":";
      position: absolute;
      right: 5px;
    }

    .info-table tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    .treatment-note {
      margin: 20px 0;
      font-size: 14px;
      background: linear-gradient(to right, #e0f7fa, #f5f5f5);
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid #22cbc3;
      position: relative;
    }

    .treatment-note strong {
      color: #2c3e50;
    }

    .prescription-list {
      margin-top: 15px;
    }

    .prescription-list ul {
      list-style-type: none;
      padding: 0;
    }

    .prescription-list li {
      margin-bottom: 12px;
      padding: 10px 15px;
      background-color: #f7fbfe;
      border-radius: 6px;
      border-left: 3px solid #3498db;
      position: relative;
      padding-left: 25px;
    }

    .prescription-list li::before {
      content: "✓";
      color: #22cbc3;
      position: absolute;
      left: 8px;
    }

    .signature {
      margin-top: 60px;
      text-align: right;
      font-weight: bold;
      color: #2c3e50;
    }

    .signature-line {
      display: inline-block;
      width: 200px;
      height: 1px;
      background: linear-gradient(90deg, transparent, #333, transparent);
      margin-top: 40px;
    }

    .footer {
      margin-top: 40px;
      text-align: center;
      font-style: italic;
      font-size: 12px;
      color: #888;
      padding-top: 20px;
      border-top: 1px solid #eee;
    }

    .watermark {
      position: absolute;
        top: 45%;
        left: 30%;
      opacity: 0.04;
      font-size: 100px;
      font-weight: bold;
      color: #22cbc3;
      pointer-events: none;
      transform: rotate(-30deg);
    }

    @media print {
      body {
        background: none;
      }
      .container {
        box-shadow: none;
        margin: 0;
        padding: 20px;
      }
      .section:hover {
        transform: none;
        box-shadow: none;
      }
    }
  </style>
</head>
<body>
    <div class="background"></div>

  <div class="container">
    <div class="watermark">VITAL</div>
    
    <div class="header">
      <div class="clinic-name">Clinique VITAL</div>
      <div class="date-section">Date de l'ordonnance : {{ \Carbon\Carbon::now()->format('d/m/Y') }}</div>
    </div>

    <div class="ordonnance-title">Ordonnance</div>

    <div class="section">
      <h3>Informations sur le patient</h3>
      <table class="info-table">
        <tr>
          <td class="label">Nom & Prénom</td>
          <td>{{ $patient->nom }} {{ $patient->prenom }}</td>
        </tr>
        <tr>
          <td class="label">Date de naissance</td>
          <td>{{ \Carbon\Carbon::parse($patient->date_Naissance)->format('d/m/Y') }}</td>
        </tr>
        <tr>
          <td class="label">Sexe</td>
          <td>{{ $patient->genre }}</td>
        </tr>
        <tr>
          <td class="label">Adresse</td>
          <td>{{ $patient->adresse ?? 'N/A' }}</td>
        </tr>
      </table>
    </div>

    <div class="section">
      <h3>Informations sur le médecin</h3>
      <table class="info-table">
        <tr>
          <td class="label">Nom & Prénom</td>
          <td>{{ $doctor->nom }} {{ $doctor->prenom }}</td>
        </tr>
        <tr>
          <td class="label">Spécialité</td>
          <td>{{ $doctor->specialite }}</td>
        </tr>
        <tr>
          <td class="label">Adresse professionnelle</td>
          <td>{{ $doctor->adresse }}</td>
        </tr>
        <tr>
          <td class="label">Téléphone</td>
          <td>{{ $doctor->tel }}</td>
        </tr>
      </table>
    </div>

    <div class="section">
      <h3>Prescription</h3>
      <div class="treatment-note">
        <strong>Durée de traitement :</strong> 1 heure<br>
        <strong>Instructions :</strong> Prendre les médicaments prescrits ci-dessous selon la posologie.
      </div>

      <div class="prescription-list">
        <ul>
          @foreach ($prescriptions as $item)
            <li>{{ $item }}</li>
          @endforeach
        </ul>
      </div>
    </div>

    <div class="signature">
      Signature du médecin<br>
      <div class="signature-line"></div>
    </div>

    <div class="footer">
      * Ordonnance générée automatiquement - VITAL Système Médical.
    </div>
  </div>
</body>
</html>