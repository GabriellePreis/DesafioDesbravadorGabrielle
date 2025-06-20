# DesafioDesbravadorGabrielle

Escrevi o código para testes automáticos com Cypress:

- Acessei a página de reservas;
- Selecionei um intervalo de datas;
- Adicionei 2 adultos e 1 criança.

Porém, encontrei dificuldades para avançar devido o reCaptcha e alguns comportamentos do sistema.
De acordo com a regra de negócio, o reCapctha é obrigatório para verificar a disponibilidade de reserva, mas por questões de segurança não é possível automatizar essa verificação com cypress, o ideal seria desabilitar no ambiente de testes.
Tentei um caminho alternativo através dos botões de "Compra" que também levam à página de lista de acomodações. Porém, há um popover com a mensgem "Seja bem vindo..." que fica em cima da data de checkout, impedindo o click para seleção de data do checkout. Tentei de diversas formas, mas não consegui selecionar o checkout por esse caminho, somente o checkin.
