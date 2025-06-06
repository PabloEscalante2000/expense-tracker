<?php

    $array_category = ["Food","Medicine","Studies","Leisure"];

    if(isset($_POST["title"]) && isset($_POST["category"]) && isset($_POST["amount"])){
        if(trim($_POST["title"]) !== "" && trim($_POST["category"]) !== "" && trim($_POST["amount"]) !== "" && trim($_POST["category"]) !== "none" && in_array($_POST["category"],$array_category)){

            $id = uniqid();
            $title = $_POST["title"];
            $category = $_POST["category"];
            $amount = (int) $_POST["amount"];

            $expense = [
                "id" => $id,
                "title"=> $title,
                "category"=> $category,
                "amount" => $amount
            ];

            $json = file_get_contents(__DIR__."/../data/data.json");
            $data = json_decode($json, true);

            $expenses = $data["expenses"];
            $expenses[] = $expense;

            $res = ["expenses" => $expenses];

            file_put_contents(__DIR__."/../data/data.json", json_encode($res,JSON_PRETTY_PRINT));

            $alerta = [
                "solution"=> true,
                "type" => "create",
            ];

        } else {
            $alerta = [
                "solution" => false,
                "type" => "create",
            ];
        }
        
    } else {
        $alerta = [
            "solution" => false,
            "type" => "create",
        ];
    }

    echo json_encode($alerta)
?>