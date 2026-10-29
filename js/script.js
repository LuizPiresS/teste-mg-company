/**
 * SCRIPT INTERATIVO (VANILLA JAVASCRIPT)
 * Teste Técnico Sessão Estratégica
 * Sem bibliotecas ou frameworks externos
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. HEADER FIXO COM SOMBRA AO ROLAR
  // --------------------------------------------------------------------------
  const header = document.getElementById('header');
  
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.7)';
      header.style.borderBottomColor = 'rgba(0, 210, 255, 0.25)';
    } else {
      header.style.boxShadow = 'none';
      header.style.borderBottomColor = 'rgba(56, 189, 248, 0.1)';
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // --------------------------------------------------------------------------
  // 2. SCROLL SUAVE AJUSTADO PARA LINKS INTERNOS COM OFFSET DO HEADER
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header.offsetHeight || 70;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 3. MÁSCARA AUTOMÁTICA DE WHATSAPP (PADRÃO BRASIL: (99) 99999-9999)
  // --------------------------------------------------------------------------
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);

      if (value.length > 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        value = `(${value}`;
      }

      e.target.value = value;
    });
  }

  // --------------------------------------------------------------------------
  // 4. SUBMISSÃO DO FORMULÁRIO DE APLICAÇÃO COM FEEDBACK VISUAL
  // --------------------------------------------------------------------------
  const appForm = document.getElementById('applicationForm');
  const successMsg = document.getElementById('successMessage');

  if (appForm && successMsg) {
    appForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Validação básica dos campos
      const inputs = appForm.querySelectorAll('input[required], select[required], textarea[required]');
      let isValid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = '#ef4444';
          isValid = false;
        } else {
          input.style.borderColor = 'rgba(148, 163, 184, 0.12)';
        }
      });

      if (!isValid) return;

      // Feedback de carregamento no botão
      const submitBtn = appForm.querySelector('.form-submit-btn');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando aplicação...';

      // Simulação rápida de envio (500ms)
      setTimeout(() => {
        appForm.style.display = 'none';
        successMsg.classList.add('active');

        // Rola até o centro da mensagem de sucesso
        const headerHeight = header.offsetHeight || 70;
        const msgPosition = successMsg.getBoundingClientRect().top + window.pageYOffset - headerHeight - 40;
        window.scrollTo({
          top: msgPosition,
          behavior: 'smooth'
        });
      }, 500);
    });
  }

  // --------------------------------------------------------------------------
  // 5. BANNER DE COOKIES (LOCALSTORAGE PERSISTENTE)
  // --------------------------------------------------------------------------
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookieBtn = document.getElementById('acceptCookieBtn');

  if (cookieBanner && acceptCookieBtn) {
    const isConsentGiven = localStorage.getItem('cookies_accepted');

    if (isConsentGiven) {
      cookieBanner.classList.add('hidden');
    }

    acceptCookieBtn.addEventListener('click', () => {
      localStorage.setItem('cookies_accepted', 'true');
      cookieBanner.classList.add('hidden');
    });
  }
});
