<?php
include 'db.php';

if (isset($_GET['title'])) {
    $title = $_GET['title'];
    $sql = "SELECT * FROM books WHERE title LIKE '%$title%'";
    $result = $conn->query($sql);
    $books = [];

    while ($row = $result->fetch_assoc()) {
        $books[] = $row;
    }

    echo json_encode($books);
}
?>
