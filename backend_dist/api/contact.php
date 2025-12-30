<?php
require_once 'cors.php';
handleCors();

header('Content-Type: application/json');

// Get POST data
$data = json_decode(file_get_contents("php://input"));

// Basic validation
if (!isset($data->email) || !isset($data->message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please provide email and message"]);
    exit;
}

// In a real app, you would save this to MySQL or send an email using mail()
// Example:
// mail("admin@ahsanair.com", "New Contact Inquiry", $data->message, "From: " . $data->email);

// Return success response
echo json_encode([
    "success" => true, 
    "message" => "Thank you! Your message has been received.",
    "receivedData" => $data // For debugging/confirmation on frontend
]);
?>
