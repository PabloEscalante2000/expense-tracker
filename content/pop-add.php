<div class="hidden w-full h-dvh z-5 bg-black/50 top-0 left-0" id="bakcground-pop">

</div>
<div class="fixed w-full rounded-t-lg bg-slate h-[80dvh] bottom-0 z-10 bg-blue-400 translate-y-full transition-all duration-300 p-5" id="pop-add">
    <div class="bg-white border-dotted border-blue-300 relative w-full max-w-[1200px] mx-auto h-full flex justify-center items-center rounded-sm relative">
        <button class="absolute top-5 left-5 cursor-pointer" id="close-pop">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
        <?php require_once(__DIR__."/create-form.php") ?>
    </div>
</div>