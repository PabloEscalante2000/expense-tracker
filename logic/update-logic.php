<?php
    if(isset($_POST["title"]) && isset($_POST["category"]) && isset($_POST["amount"]) && isset($_POST["id"])){

        $id = $_POST["id"];
        $title = $_POST["title"];
        $category = $_POST["category"];
        $amount = (int) $_POST["amount"];

        $json = file_get_contents(__DIR__."/../data/data.json");
        $data = json_decode($json, true);
        $expenses = $data["expenses"];

        $alerta = [
            "solution" => false,
            "text" => "There isn't any expense with id: ".$id
        ];

        foreach($expenses as &$expense){
            if($expense["id"] === $id){

                $expense["title"] = $title;
                $expense["category"] = $category;
                $expense["amount"] = $amount;

                $alerta = [
                    "solution" => true,
                    "type" => "update"
                ];
                break;
            }
        }

        $res = ["expenses" => $expenses];

        file_put_contents(__DIR__."/../data/data.json", json_encode($res,JSON_PRETTY_PRINT));

    } else {
        $alerta = [
            "solution" => false,
            "text" => "Missing information"
        ];
    }

    echo json_encode($alerta)
?>