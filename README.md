Oláa! 
Neste código, utilizei o Cypress para automatizar os seguintes passos:
- Acessar o endereço da página de reservas;
- Selecionar período de dias;
- Adicionar 2 adultos;
- Adicionar 1 criança de até 5 anos.
  
Entretanto, não consegui avançar para a finalização da reserva devido o reCpatcha. De acordo com a regra de negócio, só é possível clicar no botão "Verificar disponibilidade" após
marcar o reCaptcha, porém, não foi possível automatizar com o cypress para seguir com os testes, o ideal seria desabilitar essa verificação no ambiente de testes.
Também tentei por um caminho alternativo, clicando no botão "Comprar" que também leva até a lista de acomodações, mas por esse caminho não foi possível selecionar a data de checkout,
tentei de diversas formas, mas acredito que o popover "Seja bem-vindo..." pode estar impactando na visualização do calendário pelo cypress, adicionei atrasos para tentar mitigar... o
calendário aparece, mas não consigo selecionar o dia do checkout mesmo assim. Além disso, o calendário de checkout também não permite escolher o mês.
