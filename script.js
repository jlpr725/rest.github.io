document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", () => {
            alert("¡Pedido agregado al carrito!");
        });
    });
});
