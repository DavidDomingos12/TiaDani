   /*
   // Seleciona o formulário pelo id
    const form = document.getElementById('contato-form'); // Pega o elemento <form>
    const msgRetorno = document.getElementById('msg-retorno'); // Pega o parágrafo onde vamos mostrar mensagens

    // Adiciona um ouvinte de evento quando o formulário for enviado
    form.addEventListener('submit', async function (event) {
      event.preventDefault(); // Impede o envio padrão (recarregar página)

      // Cria um objeto com os dados do formulário
      const formData = new FormData(form); // Pega todos os campos do form
      const data = Object.fromEntries(formData.entries()); // Converte em objeto JS {campo: valor}

      try {
        // Faz requisição para o back-end Python (POST /contato)
        const response = await fetch(form.action, { // form.action = "/contato"
          method: 'POST',                           // Método HTTP
          headers: {
            'Content-Type': 'application/json'      // Diz que estamos enviando JSON
          },
          body: JSON.stringify(data)                // Converte o objeto JS para JSON
        });

        if (response.ok) {
          // Se a resposta for 200–299, consideramos sucesso
          msgRetorno.textContent = 'Contato enviado com sucesso! Em breve entraremos em contato pelo WhatsApp.';
          msgRetorno.classList.remove('text-danger'); // Remove qualquer estilo de erro
          msgRetorno.classList.add('text-success');   // Aplica estilo de sucesso
          form.reset(); // Limpa os campos do formulário
        } else {
          // Se o back-end respondeu com erro (ex: 500, 400)
          msgRetorno.textContent = 'Ocorreu um erro ao enviar seus dados. Tente novamente em alguns instantes.';
          msgRetorno.classList.remove('text-success');
          msgRetorno.classList.add('text-danger');
        }
      } catch (error) {
        // Se houve erro de rede ou algum problema inesperado
        console.error('Erro na requisição:', error); // Mostra no console para debug
        msgRetorno.textContent = 'Falha na conexão. Verifique sua internet ou tente novamente mais tarde.';
        msgRetorno.classList.remove('text-success');
        msgRetorno.classList.add('text-danger');
      }
    });
*/