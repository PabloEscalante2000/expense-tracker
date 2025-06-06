<body>
    <div class="w-full py-5 text-5xl font-bold flex justify-center items-center bg-blue-300">
        <h1>Expense Tracker</h1>
    </div>
    <main class="mx-auto w-full max-w-[1200px] p-5 space-y-5">
        <div>
            <button class="bg-blue-400 font-bold text-xl px-2 py-1 rounded-sm shadow-sm border border-blue-500 transition-all duration-300 hover:scale-95 cursor-pointer" id="button-pop">Create new expense</button>
        </div>
        <div class="p-5 rounded-lg bg-blue-300 border-blue-400 shadow-lg font-bold space-y-5">
            <h1 class="text-4xl">Consumo total:</h1>
            <p class="text-xl">$1000000</p>
        </div>
        <div class="border-dotted border-4 border-blue-500 p-5 min-h-96 rounded-lg p-5" id="expense-list">
            <?php require_once(__DIR__."/../content/expense-list.php"); ?>
        </div>
    </main>
        <?php require_once(__DIR__."/../content/pop-add.php") ?>
</body>