const fade = document.getElementById("fade")
const modal = document.getElementById("modal")
const form = document.getElementById("form-pedido")
function abrir() {
    fade.classList.remove("hide")
    fade.classList.add("fade")

    modal.classList.remove("hide")
    modal.classList.add("modal")
}
function fechar() {
    fade.classList.remove("fade")
    fade.classList.add("hide")

    modal.classList.remove("modal")
    modal.classList.add("hide")
}
form.addEventListener("submit", function(event) {
    event.preventDefault()
    const pagamento = document.querySelector(
        'input[name="pagamento"]:checked'
    )
    if (pagamento.value === "Pix") {
        abrir()
    }
})
