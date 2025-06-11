<?php
// Ruta del JSON
$jsonFile = './data/data.json';

if (!file_exists($jsonFile)) {
    http_response_code(404);
    echo "Archivo no encontrado.";
    exit;
}

// Leer y decodificar JSON
$jsonData = file_get_contents($jsonFile);
$data = json_decode($jsonData, true);
$data = $data["expenses"];

if (!is_array($data) || empty($data)) {
    http_response_code(400);
    echo "El archivo JSON está vacío o mal formado.";
    exit;
}

// Establecer headers para forzar descarga
header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename="datos.csv"');

// Abrir salida
$output = fopen('php://output', 'w');

// Escribir cabecera
fputcsv($output, array_keys($data[0]));

// Escribir filas
foreach ($data as $fila) {
    fputcsv($output, $fila);
}

fclose($output);
exit;