import { serverErrors } from '../../data/content';

export const RECEIVE_USER_INVESTMENT = 'linus/RECEIVE_USER_INVESTMENT';

export const saveInvestment = data => ({
    type: RECEIVE_USER_INVESTMENT,
    email: data.email,
    amount: data.amount
});

export const sendInvestment = (result, investment) => {
    console.log(investment)
    return new Promise((res, rej) => {
        setTimeout(() => {
        if(result) {
            res(serverErrors.success);
        } else {
            rej(serverErrors.failure);
        }
        }, 2000);
    });
    }