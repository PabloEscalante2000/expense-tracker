<h1 class="text-4xl">Total Amount:</h1>
<?php
    $json = file_get_contents(__DIR__."/../data/data.json");
    $data = json_decode($json, true);
    $expenses = $data["expenses"];

    $total = 0;
    foreach($expenses as $expense){
        $total += $expense["amount"];
    }
?>
<p class="text-xl">S/. <?= $total; ?></p>