const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe ('Home', () => {
    it ('should render create account modal when click on cta create account button', () => {
        cy.visit(APP_URL)

        cy.get('#cta-create-account-button').click()

        cy.get('#modal-create-account')
    })

    it ('should render create account modal when click on header create account button', () => {
        cy.visit(APP_URL)

        cy.get('#header-create-account-button').click()

        cy.get('#modal-create-account')
    })

    it ('should render login modal when click on header login button', () => {
        cy.visit(APP_URL)

        cy.get('#header-login-button').click()

        cy.get('#modal-login')
    })

    it ('should login when email and password correct', () => {
        cy.visit(APP_URL)

        cy.get('#header-login-button').click()
        cy.get('#modal-login')

        cy.get('#email-field').type('thami@email.com')
        cy.get('#password-field').type('1234')
        cy.get('#submit-button').click()

        cy.url().should('equal', `${APP_URL}/feedbacks`)
    })

    it ('should return error with invalid email', () => {
        cy.visit(APP_URL)

        cy.get('#header-login-button').click()
        cy.get('#modal-login')

        cy.get('#email-field').type('thami@')
        cy.get('#password-field').type('1234')
        cy.get('#submit-button').click()

        cy.get('#email-error')
    })

    it ('should return error with invalid password', () => {
        cy.visit(APP_URL)

        cy.get('#header-login-button').click()
        cy.get('#modal-login')

        cy.get('#email-field').type('thami@email.com')
        cy.get('#password-field').type('12')
        cy.get('#submit-button').click()

        cy.get('#password-error')
    })

    it ('should logout when click on logout button', () => {
        cy.visit(APP_URL)

        cy.get('#header-login-button').click()
        cy.get('#modal-login')

        cy.get('#email-field').type('thami@email.com')
        cy.get('#password-field').type('1234')
        cy.get('#submit-button').click()

        cy.url().should('equal', `${APP_URL}/feedbacks`)
        cy.wait(2000)

        cy.get('#logout-button').click()
        cy.url().should('equal', `${APP_URL}/`)
    })
})
