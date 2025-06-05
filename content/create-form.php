<form id="create-form" class="w-full flex justify-center items-center gap-5 flex-col text-lg font-bold" method="post" action="./logic/create-logic.php" >
    <label for="title">Title:</label>
    <input required name="title" type="text" class="border-2 p-1" />
    <label for="category">Category:</label>
    <select required name="category" class="border-2 p-1">
        <option value="none">--Select--</option>
        <option value="Food">Food</option>
        <option value="Medicine">Medicine</option>
        <option value="Studies">Studies</option>
        <option value="Leisure">Leisure</option>
    </select>
    <label for="amount">Amount:</label>
    <input required class="border-2 p-1" type="number" name="amount" />
    <input type="submit" class="bg-blue-400 px-3 py-1 cursor-pointer shadow-md rounded-sm" value="Create Expense" />
</form>