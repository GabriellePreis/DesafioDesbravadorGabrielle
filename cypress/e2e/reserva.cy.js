
/// <reference types="cypress" />

describe('Realizar Reserva', () => {

    context('Disponibilidade de Quartos', () => {

        //Cenário 1
        it('Consultar disponibilidade de reserva sem marcar reCaptcha', () => {

        //Etapa 1: acessar site
        cy.visit('https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050')
        cy.wait(10000);

        //Etapa 2: Selecionar intervalo de datas
       // Aguarda o calendário aparecer
       cy.get('.calendar, .month2').should('be.visible');

       // Seleciona a data de início: 16/07/2025
       cy.get('.month2 > tbody > :nth-child(3) > :nth-child(4) > .day > div')
      .click({ force: true });

       // Seleciona a data de fim: 19/07/2025
       cy.get('.month2 > tbody > :nth-child(3) > :nth-child(7) > .day > div')
      .click({ force: true });

       // Valida dias selecionados
       cy.get('.day.checked').should('have.length', 4);

       //Etapa 3: Adicionar 2 adultos e 1 criança

       cy.get('input[name="calendar-adults"]')
       .type('2');

       cy.get('button.btn-children')
       .should('be.visible')
       .click();

       cy.get('input[name="faixa1"]')
       .type('1');
         
       //Etapa 4: remover reCpatcha
       cy.get('iframe[title="reCAPTCHA"]').then($iframe => {
       $iframe.remove();

       //Etapa 5: clicar no botão Verificar Disponibilidade
       cy.contains('button', 'Verificar Disponibilidade').click();

    });
    cy.wait(3000);
        });
        
        //Cenário 2
       it('Consultar Disponibilidade de Quartos pelo botão Comprar', () => {

       // 1. Acessa o site
      cy.visit('https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050');
      cy.wait(10000);

      // 2. Clica no botão Comprar
      cy.get(':nth-child(2) > :nth-child(1) > .sc-DZJJV > .row > :nth-child(1) > .sc-ggWZvA')
      .should('be.visible')
      .click();
      cy.wait(5000);

    
     // Inserir data de Checkin
     cy.get('#\\#daterange-checkin-293670')
    .should('be.visible')
    .click();
   
    cy.get('.drp-calendar.left th.next.available')
    .click();

    cy.get('.drp-calendar.left')
    .contains('td.available', '16')
    .click();
   
     //Inserir Data Checkout, tentativa de avançar a seleção com o popover
    cy.wait(15000);
    cy.get('#daterange-checkout-293670')
    .should('be.visible')
    .click();

    cy.wait(5000);

    cy.get('.drp-calendar.left')
    .contains('td.available', '19')
    .click();

    cy.wait(5000);
        
    });
        
    });

    context('Seleção de Quarto', () => {

        //Cenário 3
        it('Adicionar quarto STANDARD ST1', () => {


    });
    });

    context('Detalhes da reserva', () => {

        //Cenário 4
        it('Adicionar nome dos hóspedes', () => {
        
    });
    });

    context('Pagamento', () => {

    //Cenário 5
    it('Efetuar Pagamento', () => {

        

        
    });
    });


        
    });


