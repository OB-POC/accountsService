module.exports = {
    username: 'john',
    password: 'doe',
    UIN: 'UIN-xxxxx',
    creditScore: 650,
    banks: [
        {
            bankName: 'JP Morgan Chase',
            bankId: 'JJPP  MMoorrggaann  CChhaassee',
            accounts: [
                {
                    accountType: 'CC',
                    accountNumber: 'XXXXXX XXXXXX6789',
                    accountTitle: 'Chase Freedom Unlimited Credit Card',
                    creditLimit: '3,000',
                    availableCredit: 100,
                    totalBalanceDue: '2,900',
                    minBalanceDue: 50,
                    apr: 25.49,
                    dueDate: new Date().setDate(new Date().getDate()+5)                         
                }
            ]
        },
        {
            bankName: 'Bank of Scotland',
            bankId: 'BBaannkk  ooff  SSccoottllaanndd',
            accounts: [
                {
                    accountType: 'CC',
                    accountNumber: 'XXXXXX XXXXXX7890',
                    accountTitle: 'Classic Credit Card',
                    creditLimit: '4,000',
                    availableCredit: '2,000',
                    totalBalanceDue: '2,000',
                    minBalanceDue: 100,
                    apr: 27.10,
                    dueDate: new Date().setDate(new Date().getDate()+5)                          
                }
            ]
        },
        {
            bankName: 'Barclays',
            bankId: 'BBaarrccllaayyss',
            accounts: [
                {
                    accountType: 'M',
                    accountNumber: 'XXXXXX XXXXXX7890',
                    accountTitle: '2 Years Fixed Reward',
                    minMonthlyPayment: '2,000',
                    remainingFullTerm: '2Y 1M',
                    totalBalanceDue: '50,000',
                    interestRate: 3.3,
                    dueDate: new Date().setDate(new Date().getDate()+5)                         
                }
            ]
        }
    ]   
}