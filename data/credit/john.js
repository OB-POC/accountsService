module.exports = {
    username: 'john',
    password: 'doe',
    UIN: 'UIN-xxxxx',
    creditScore: 650,
    banks: [
        {
            bankName: 'Capital One',
            bankId: 'CCaappiittaall  OOnnee',
            accounts: [
                {
                    accountType: 'CC',
                    accountNumber: '456789 0123456789',
                    accountTitle: 'Low Rate',
                    creditLimit: 4000,
                    availableCredit: 2000,
                    totalBalanceDue: 2000,
                    minBalanceDue: 500,
                    apr: 35,
                    dueDate: new Date().setDate(new Date().getDate()+12)                         
                }
            ]
        },
        {
            bankName: 'Barclays',
            bankId: 'BBaarrccllaayyss',
            accounts: [
                {
                    accountType: 'CC',
                    accountNumber: '567890 1234567890',
                    accountTitle: 'No Fee 0% Balance Transfer',
                    creditLimit: 4000,
                    availableCredit: 1500,
                    totalBalanceDue: 2500,
                    minBalanceDue: 400,
                    apr: 30,
                    dueDate: new Date().setDate(new Date().getDate()+5)                          
                }
            ]
        },
        {
            bankName: 'Citi Bank',
            bankId: 'CCiittii  BBaannkk',
            accounts: [
                {
                    accountType: 'M',
                    accountNumber: '567890 1234567890',
                    accountTitle: 'Home Loan',
                    minMonthlyPayment: 150,
                    remainingFullTerm: '1Y 10M',
                    totalBalanceDue: 2000,
                    minBalanceDue: 2000,
                    interestRate: 2.5,
                    dueDate: new Date().setDate(new Date().getDate()+20)                      
                }
            ]
        }
    ]
}