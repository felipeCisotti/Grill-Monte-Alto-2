
document.addEventListener('DOMContentLoaded', () => {
    const updateButton = document.getElementById('openmodal');
    const cancelButton = document.getElementById('cancel');
    const favDialog = document.getElementById('favDialog');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav-menu-open');
            navToggle.classList.toggle('nav-toggle-open');
        });
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav-menu-open');
                navToggle.classList.remove('nav-toggle-open');
            });
        });
    }

    // Dialog: apenas ligar eventos se elementos existirem e API suportada
    if (favDialog && typeof favDialog.showModal === 'function') {
        if (updateButton) updateButton.addEventListener('click', () => favDialog.showModal());
        if (cancelButton) cancelButton.addEventListener('click', () => favDialog.close());
    }

});

// Mensagem automática para WhatsApp

const Inpname = document.getElementById('nome');
const Inpphone = document.getElementById('numero');
const Inptype = document.getElementById('tipo-de-compra');
const Inpcategory = document.getElementById('categoria');
const Inptamanho = document.getElementById('tamanho');
const submitBtn = document.getElementById('button-enviar');

const handleSubmitForm = async () => {
    // Validar se todos os campos estão preenchidos
    if (!Inpname || !Inpname.value.trim()) {
        alert('Por favor, preencha o nome.');
        return;
    }
    if (!Inpphone || !Inpphone.value.trim()) {
        alert('Por favor, preencha o telefone.');
        return;
    }
    if (!Inptype || !Inptype.value) {
        alert('Por favor, selecione o tipo de compra.');
        return;
    }
    if (!Inpcategory || !Inpcategory.value) {
        alert('Por favor, selecione a categoria.');
        return;
    }
    if (!Inptamanho || !Inptamanho.value) {
        alert('Por favor, selecione o tamanho.');
        return;
    }

    const name = Inpname.value;
    const phone = Inpphone.value;
    const type = Inptype.value;
    const category = Inpcategory.value;
    const tamanho = Inptamanho.value;

    const mensagem = `Olá, gostaria de solicitar um orçamento para um ${type} de ${category} no tamanho ${tamanho}. Meu nome é ${name} e meu telefone é ${phone}.`;
    
    console.log('Mensagem:', mensagem);

    // Enviar para WhatsApp
    const numeroWhatsApp = '5516997816739';
    const mensagemEncoded = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemEncoded}`;
    
    window.open(urlWhatsApp, '_blank');

    const favDialog = document.getElementById('favDialog');
    if (favDialog) favDialog.close();
};

if (submitBtn) {
    submitBtn.addEventListener('click', handleSubmitForm);
}
