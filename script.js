'use strict';

const WHATSAPP_NUMBER = '5511940129358';

function enhanceWhatsappLinks() {
  document.querySelectorAll('.whatsapp-link[data-message]').forEach((link) => {
    const message = link.dataset.message;
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });
}

function setupMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  enhanceWhatsappLinks();
  setupMobileNav();
  setupContactForm();
});

function setupContactForm() {
  const form = document.getElementById('contato-form');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = form.nome.value.trim();
    const telefone = form.telefone.value.trim();
    const interesse = form.interesse.value;
    const mensagem = form.mensagem.value.trim();

    const linhas = [
      'Olá! Vim pelo site da ISA Prime.',
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      `Interesse: ${interesse}`,
    ];

    if (mensagem) {
      linhas.push(`Mensagem: ${mensagem}`);
    }

    const texto = linhas.join('\n');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank', 'noopener');
  });
}
