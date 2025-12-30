<?php
require_once 'cors.php';
handleCors();

header('Content-Type: application/json');

// Dummy data representing database records
// In a real app: $conn = new mysqli(...); $result = $conn->query("SELECT * FROM shipments");

$shipments = [
    [
        "trackingId" => "AAL-89231",
        "customer" => "John Doe",
        "origin" => "Shanghai, CN",
        "destination" => "Mogadishu, SO",
        "status" => "In Transit"
    ],
    [
        "trackingId" => "AAL-89232",
        "customer" => "Sarah Ahmed",
        "origin" => "Dubai, UAE",
        "destination" => "Mogadishu, SO",
        "status" => "Delivered"
    ],
    [
        "trackingId" => "AAL-89233",
        "customer" => "Global Traders Ltd",
        "origin" => "Istanbul, TR",
        "destination" => "Hargeisa, SO",
        "status" => "In Transit"
    ],
    [
        "trackingId" => "AAL-89234",
        "customer" => "Mohamed Abdi",
        "origin" => "Nairobi, KE",
        "destination" => "Mogadishu, SO",
        "status" => "Pending"
    ],
    [
        "trackingId" => "AAL-89235",
        "customer" => "Somali Imports",
        "origin" => "Guangzhou, CN",
        "destination" => "Bosaso, SO",
        "status" => "Customs"
    ]
];

echo json_encode($shipments);
?>
