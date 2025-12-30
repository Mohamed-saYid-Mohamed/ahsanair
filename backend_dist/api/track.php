<?php
require_once 'cors.php';
handleCors();

header('Content-Type: application/json');

// Get POST data
$data = json_decode(file_get_contents("php://input"));

if (!isset($data->trackingId)) {
    echo json_encode(["error" => "No tracking ID provided"]);
    exit;
}

$trackingId = $data->trackingId;

// Dummy logic for demonstration
// In a real app, you would query your MySQL database here

$shipmentData = null;

// Simulate finding a specific shipment
if ($trackingId === "AAL-12345") {
    $shipmentData = [
        "id" => $trackingId,
        "status" => "In Transit",
        "origin" => "Mogadishu (MGQ)",
        "destination" => "London (LHR)",
        "estimatedDelivery" => "Oct 28, 2023",
        "events" => [
            ["status" => "Shipment Created", "date" => "2023-10-25 09:00 AM", "location" => "Mogadishu", "completed" => true, "icon" => "Package"],
            ["status" => "Picked Up", "date" => "2023-10-25 02:00 PM", "location" => "Mogadishu", "completed" => true, "icon" => "Truck"],
            ["status" => "Departed Facility", "date" => "2023-10-26 10:00 AM", "location" => "Aden Adde Int. Airport", "completed" => true, "icon" => "Plane"],
            ["status" => "In Transit", "date" => "Pending", "location" => "En Route", "completed" => false, "icon" => "Clock"],
            ["status" => "Delivered", "date" => "Pending", "location" => "London", "completed" => false, "icon" => "CheckCircle"]
        ]
    ];
} else {
     // Default random response for other IDs to show it works
    $statuses = ["In Transit", "Delivered", "Customs Clearance", "Pending"];
    $randomStatus = $statuses[array_rand($statuses)];
    
    $shipmentData = [
        "id" => $trackingId,
        "status" => $randomStatus,
        "origin" => "Mogadishu (MGQ)",
        "destination" => "Dubai (DXB)",
        "estimatedDelivery" => "Next Week",
         "events" => [
            ["status" => "Shipment Created", "date" => "2023-10-25 09:00 AM", "location" => "Mogadishu", "completed" => true, "icon" => "Package"],
            ["status" => "Processing", "date" => "2023-10-26 10:00 AM", "location" => "Warehouse", "completed" => true, "icon" => "Truck"],
            ["status" => $randomStatus, "date" => "Pending", "location" => "En Route", "completed" => false, "icon" => "Clock"]
        ]
    ];
}

echo json_encode($shipmentData);
?>
